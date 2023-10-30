"use client";

import { useState } from "react";
import Image from "next/image";

import Logo from "../public/images/logo.svg";

export default function Header() {
  const [activeNavbar, setActiveNavbar] = useState(false);

  return (
    <header className="max-w-5xl m-auto lg:flex lg:items-center lg:gap-4 py-2">
      <div className="w-full lg:w-auto flex items-center justify-between px-4 py-6">
        <a href="/">
          <Image src={Logo} alt="Logo Shortly" />
        </a>

        <button
          className="flex flex-col gap-1 lg:hidden"
          onClick={() => setActiveNavbar(!activeNavbar)}
        >
          <span className="block w-6 h-1 bg-grayish-violet"></span>
          <span className="block w-6 h-1 bg-grayish-violet"></span>
          <span className="block w-6 h-1 bg-grayish-violet"></span>
        </button>
      </div>

      <div className="absolute lg:static w-full px-4 lg:px-0 z-10">
        <div
          className={`${
            activeNavbar ? "block" : "hidden"
          } lg:flex lg:items-center bg-dark-violet lg:bg-white divide-y lg:divide-none divide-grayish-violet text-white lg:text-grayish-violet p-4 lg:p-0 rounded-md`}
        >
          <nav className="p-4 lg:p-0 lg:flex-1">
            <ul className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 lg:gap-7">
              <li className="hover:text-dark-violet font-bold">
                <a href="/">Features</a>
              </li>

              <li className="hover:text-dark-violet font-bold">
                <a href="/">Pricing</a>
              </li>

              <li className="hover:text-dark-violet font-bold">
                <a href="/">Resources</a>
              </li>
            </ul>
          </nav>

          <div className="p-4 lg:p-0 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-7 text-white">
            <a
              href="/"
              className="lg:text-grayish-violet hover:text-dark-violet font-bold"
            >
              Login
            </a>
            <a
              href="/"
              className="bg-cyan w-full p-2 lg:px-6 rounded-full text-center font-bold hover:opacity-60"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
