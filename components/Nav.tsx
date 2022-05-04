import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "Prices",
    href: "#",
  },
  {
    title: "Learn",
    href: "#",
  },
  {
    title: "Individuals",
    href: "#",
  },
  {
    title: "Businesses",
    href: "#",
  },
  {
    title: "Developers",
    href: "#",
  },
  {
    title: "Company",
    href: "#",
  },
];

const Nav = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <div className="w-full  border-b-2 border-gray-100 overflow-hidden fixed bg-white z-50">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex justify-between h-full items-center px-5 z-50">
          <div className="py-5">
            <a href="#">
              <Image src="/logo.svg" height={20} width={112} />
            </a>
          </div>

          <div className="hidden h-full lg:flex items-center text-gray-900 text-sm font-semibold space-x-9">
            {menuItems.map((ele, index) => (
              <div
                key={index}
                className="h-full py-5 border-b-4 border-white hover:border-primary"
              >
                <Link href={ele.href}>
                  <p className="cursor-pointer mt-1 ">{ele.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex">
            <button className="text-sm hidden xl:block hover:text-primary font-semibold tracking-wide px-4 py-2 rounded-md">
              Sign in
            </button>
            <button className="bg-primary hover:bg-primary-600 text-sm text-white font-semibold tracking-wide px-4 py-2 rounded-md">
              Get started
            </button>
            <div
              className="flex xl:hidden justify-center items-center ml-3 text-gray-700"
              onClick={() => setMenuStatus(!menuStatus)}
            >
              {menuStatus ? (
                <XIcon className="h-7" />
              ) : (
                <MenuIcon className="h-7" />
              )}
            </div>
          </div>
        </div>
        <div
          className={`h-screen w-full ${
            menuStatus ? "diplay" : "hidden"
          } px-5 transition ease-in-out delay-150 `}
        >
          <div className="mt-5 flex flex-col items-start text-gray-900 text-lg font-medium space-y-7">
            {menuItems.map((ele, index) => (
              <Link key={index} href={ele.href}>
                <p className="cursor-pointer">{ele.title}</p>
              </Link>
            ))}
          </div>
          <div className="mt-9 space-y-2 w-full sm:w-72 ">
            <button className="w-full bg-primary hover:bg-primary-600 text-md text-white px-3 py-4 rounded-md">
              Get started
            </button>
            <button className="w-full border-2 border-primary text-md  px-3 py-4 text-primary text-md font-semibold rounded-md">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
