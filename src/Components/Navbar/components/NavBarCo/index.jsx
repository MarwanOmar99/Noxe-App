import React from "react";
import { Link } from "react-router-dom";

export default function NavBarCo({ links }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" aria-current="page" to={links.path}>
        {links.name}
      </Link>
    </li>
  );
}
