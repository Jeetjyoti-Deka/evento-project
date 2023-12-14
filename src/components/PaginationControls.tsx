import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btnStyles =
  "text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 group hover:opacity-100 transition-all text-sm";

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex w-full items-center justify-between">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon className="group-hover:-translate-x-1 transition-all" />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon className="group-hover:translate-x-1 transition-all" />
        </Link>
      )}
    </section>
  );
}
