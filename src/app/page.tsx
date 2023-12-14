import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-36 px-3 flex flex-col items-center justify-center">
      <H1>Find events around you</H1>
      <p className="text-2xl lg:text-3xl opacity-75 mb-12 mt-7">
        Browse more than{" "}
        <span className="italic font-bold underline text-accent">
          10,000 events
        </span>{" "}
        worldwide
      </p>
      <SearchForm />
      <section className="flex gap-x-4 mt-4 text-white/50">
        <p>Popular: </p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
