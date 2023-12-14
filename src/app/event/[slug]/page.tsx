import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

export async function generateStaticParams() {
  // top 100 most popular events
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}

export default async function EventPage({ params }: Props) {
  const { slug } = params;

  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative overflow-hidden flex items-center justify-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          alt="event image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover z-0 blur-3xl"
          priority
        />
        <div className="z-10 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                day: "2-digit",
                month: "long",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by{" "}
              <span className="italic text-accent">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] rounded-md border-2 border-white/10 sm:w-full py-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 tracking-wide text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}
