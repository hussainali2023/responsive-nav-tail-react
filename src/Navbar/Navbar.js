import React from "react";
import Link from "../Link/Link";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contacts", path: "/contacts" },
    { id: 5, name: "About", path: "/about" },
  ];
  return (
    <nav>
      <Bars3Icon className="h-6 w-6 text-blue-500" />
      <ul className="md:flex justify-center">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
