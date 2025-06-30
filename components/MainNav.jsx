import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo.jsx";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6 " />
        <Link href="/cv/Resume.docx" download="Sarah-Resume.docx">
          <button className="btn  bg-[#201837] mb-16">
            <div className="flex items-center gap-3">
              <span>Download CV</span>
              <MdFileDownload className="text-xl " />
            </div>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
