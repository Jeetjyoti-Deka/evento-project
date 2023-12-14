import EventCard from "./EventCard";
import { capitalize } from "@/lib/utility";
import PaginationControls from "./PaginationControls";
import { getEvents } from "@/lib/server-utils";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await getEvents(capitalize(city), page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    page * 6 < totalCount ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap justify-center gap-10">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
