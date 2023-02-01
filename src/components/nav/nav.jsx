import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center gap-4 md:pl-24">
        <Link to="/about">من نحن</Link>
        <Link to="/contact">تواصل معنا</Link>
      </ul>
    </nav>
  );
}

const Link = ({ to, children }) => (
  <li>
    <NavLink
      to={to}
      className="relative before:absolute before:bg-slate-400 before:h-px before:bottom-0 before:w-3 before:transition-all"
    >
      {children}
    </NavLink>
  </li>
);
