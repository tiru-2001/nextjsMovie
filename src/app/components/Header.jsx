"use client";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "./index";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="px-4 flex justify-between items-center shadow-customShadow">
      <Link className="" href="/">
        <Image
          src={"/images/logo.png"}
          alt={"logo"}
          priority="high"
          width={80}
          height={80}
        />
      </Link>

      {/* desktop navigation  */}
      <section className="sm:flex flex-1 justify-end hidden">
        <Nav classname={"flex text-xl gap-8"} />
      </section>
      {/* mobile navigation  */}
      <section className="sm:hidden flex-1 items-end relative flex-col  flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {toggle && (
          <div className="absolute z-40  bg-slate-300 rounded-md top-[140%] flex items-center justify-center w-[200px] h-[200px] p-3 right-0 ">
            <Nav
              toggle={toggle}
              setToggle={setToggle}
              classname={"flex flex-col  text-gray-700 text-2xl gap-3"}
            />
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;
