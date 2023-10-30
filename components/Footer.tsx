import Image from "next/image";

import Logo from "../public/images/logo.svg";

import {FacebookLogo, TwitterLogo, PinterestLogo, InstagramLogo} from "./assets/svg";

export default function Footer() {
  return (
    <footer className="bg-very-dark-violet">
      <div className="max-w-5xl m-auto text-white w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-9 py-14">
        <Image src={Logo} alt="Logo Shortly" className="invert mb-4" />

        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="mb-2 font-bold">Features</p>
          <a href="/" className="text-gray hover:text-cyan">
            Link Shortening
          </a>
          <a href="/" className="text-gray hover:text-cyan">
            Branded Links
          </a>
          <a href="/" className="text-gray hover:text-cyan">
            Analytics
          </a>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="mb-3 font-bold">Resources</p>
          <a href="/" className="text-gray hover:text-cyan">
            Blog
          </a>
          <a href="/" className="text-gray hover:text-cyan">
            Developers
          </a>
          <a href="/" className="text-gray hover:text-cyan">
            Support
          </a>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="mb-3 font-bold">Company</p>
          <a href="/" className="text-gray hover:text-cyan">
            About
          </a>
          <a href="/" className="text-gray hover:text-cyan">
            Our Team
          </a>
          <a href="/" className="text-gray hover:text-cyan">
            Careers
          </a>
          <a href="/" className="text-gray hover:text-cyan">
            Contact
          </a>
        </div>

        <div className="flex gap-6">
          <a href="/">
            <FacebookLogo />
          </a>
          <a href="/">
            <TwitterLogo />
          </a>
          <a href="/">
            <PinterestLogo />
          </a>
          <a href="/">
            <InstagramLogo />
          </a>
        </div>
      </div>
    </footer>
  );
}
