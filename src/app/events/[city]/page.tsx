import EventsList from "@/components/EventsList";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { getHeading } from "@/lib/utility";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: getHeading(city),
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  let { city } = params;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="py-24 px-[20px] flex flex-col items-center min-h-[110vh]">
      <H1 className="mb-28">{getHeading(city)}</H1>

      <Suspense key={city + parsedPage} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
