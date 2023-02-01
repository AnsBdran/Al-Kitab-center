import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";

// const headerStyles =
//   "flex justify-between bg-slate-900 text-slate-50 py-3 px-4";

export default function Header() {
  return (
    <header className="flex justify-between py-3 px-4 bg-slate-900 text-slate-200 shadow-xl">
      <Link to="/">
        <span> مركز الكتاب</span>
      </Link>
      <Nav />
    </header>
  );
}
