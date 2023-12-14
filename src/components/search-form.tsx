"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    const path = searchText.toLowerCase();
    router.push(`/events/${path}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        type="text"
        placeholder="Search events in any city..."
        className="w-full h-16 rounded-lg bg-white/[7%] focus:bg-white/10 px-6 outline-none focus:ring-2 ring-accent/50 transition-all"
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
