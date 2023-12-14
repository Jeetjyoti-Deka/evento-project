"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  return (
    <div className="w-full bg-white/5 min-h-[80vh] flex flex-col items-center justify-center">
      <p>The Path `{pathName}` does not exist.</p>
      <p>
        Go to{" "}
        <Link href="/" className="text-blue-400 underline">
          HOME
        </Link>{" "}
        page
      </p>
    </div>
  );
}
