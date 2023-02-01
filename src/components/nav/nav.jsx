import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center gap-4">
        <li>
          <NavLink to="/about">من نحن</NavLink>
        </li>
        <li>
          <NavLink to="/contact">تواصل معنا</NavLink>
        </li>
      </ul>
    </nav>
  );
}
