import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";

// const headerStyles =
//   "flex justify-between bg-slate-900 text-slate-50 py-3 px-4";

export default function Header() {
  return (
    <header className=" py-3 px-4 text-sm sm:text-base bg-slate-200 shadow-xl">
      <div className="flex justify-between  mx-auto max-w-5xl">
        <Link to="/">
          <span className="text-lg md:text-xl font-medium"> مركز الكتاب</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}