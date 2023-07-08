import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="container mx-auto flex min-w-7xl shadow-xl p-4
     bg-neutral-900 text-white rounded-sm justify-evenly"
    >
      <span> Created By -- Preethi -- Built with Next.Js</span>
      <br />
      <span>
        <Link
          href="#home"
          className=" scroll-smooth bg-white text-black p-2 font-semibold rounded-md" target="_blank" rel="noopener noreferrer"
        >
          Scroll To Top
        </Link>
      </span>
    </div>
  );
}
