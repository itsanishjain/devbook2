import Link from "next/link";
import { FeedBack } from "./FeedBack";

const navItems = {
  "/": {
    name: "DevFinder",
  },
  "/about": {
    name: "About us",
  },
  "/contact": {
    name: "Contact us",
  },
};

export default async function MainNavbar() {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown block md:hidden">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 bg-accent p-2 shadow"
          >
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  className="md:hidden rounded-md p-2 hover:bg-secondary md:flex"
                  href={path}
                >
                  {name}
                </Link>
              );
            })}
          </ul>
        </div>
        <Link href="/">
          <span className="h-full w-full rounded-full text-4xl">🌞</span>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal space-x-4 px-1 text-xl">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                className="hidden rounded-md p-2 hover:bg-base-300 md:flex"
                href={path}
              >
                {name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end text-lg">
        {/* <Link href="/profile">
          <button className="btn">my names</button>
        </Link> */}
        <FeedBack />
      </div>
    </div>
  );
}
