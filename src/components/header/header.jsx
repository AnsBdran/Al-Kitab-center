import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";

// const headerStyles =
//   "flex justify-between bg-slate-900 text-slate-50 py-3 px-4";

export default function Header() {
  return (
    <header className=" py-3 px-4 sm:px-24 md:text-lg bg-slate-900 text-slate-200 shadow-xl">
      <div className="flex justify-between ">
        <Link to="/">
          <span className="text-lg md:text-xl font-medium"> مركز الكتاب</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
