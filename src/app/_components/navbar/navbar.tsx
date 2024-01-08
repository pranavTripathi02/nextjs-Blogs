"use client";

import React, { useEffect } from "react";
import useDebounce from "@/app/_hooks/useDebounce";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

function Navbar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    console.log(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="mt-2 flex h-[4rem] w-full items-center justify-between border-b border-[var(--secondary)] px-5">
      <div className="logo flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-text"
        >
          <path d="M17 6.1H3" />
          <path d="M21 12.1H3" />
          <path d="M15.1 18H3" />
        </svg>
        <span className={`font-sans ${abril.variable} text-[1.5rem]`}>
          Blogs
        </span>
      </div>
      <div className="search">
        <input
          className="rounded-lg border border-[var(--secondary)] bg-transparent px-2 py-1"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between">
        <a
          className="mx-2 rounded-lg bg-[var(--text)] px-2 py-1 text-[var(--background)]"
          href=""
        >
          Sign Up
        </a>
        <a
          className="mx-2 rounded-lg border border-[var(--secondary-alt)] px-2 py-1"
          href=""
        >
          Log In
        </a>
      </div>
    </div>
  );
}

export default Navbar;
