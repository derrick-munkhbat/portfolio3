"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "gallery",
    path: "/gallery",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 text-primary dark:text-white text-xl ">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "border-b-2 border-primary hover:border-slate-200 dark:border-white round-lg"
            } capitalize font-medium hover:text-primary transition-all  hover:bg-slate-100 hover:rounded-xl p-2`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
