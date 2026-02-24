"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function NavButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const params = usePathname();

  useEffect(() => {
    console.log("Current path:", params);
  }, [params]);

  return (
    <button className="text-xl p-5 px-15 border-x border-black hover:bg-amber-100">
      <Link href={href} className={params === href ? "underline" : ""}>
        {children}
      </Link>
    </button>
  );
}
