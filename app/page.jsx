"use client";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
import Image from "next/image";
// import avatarImg from "@/public/Me1.png";
import { MdArrowOutward } from "react-icons/md";
import avatarImgg from "@/public/me4.png"
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      {/* pattern */}
      <Pattern />
      {/* text content */}
      <div className="flex flex-row xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I'm Sarah, <br />
            <TypeAnimation
              sequence={["Web Developer", 2000]}
              wrapper="span"
              speed={40}
              className="text-[#5810ff]"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="ma-w-[500px] mb-[44px]">
            I build Visually captivating, user-friendly websites that transform
            your ideas into seamless, engaging digital experiences.
          </p>
          <button className="btn  bg-[#5810ff] mb-16">
            <Link href="/contact">
            <div className="flex items-center gap-3">
              <span>Let's talk.</span>
              <MdArrowOutward className="text-xl " />
            </div>
            </Link>
          </button>
          {/* contact info  */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            {/* phone */}
            <div className="flex items-center gap-4 text-lg">
              <a href="https://wa.me/2348109641033" className="text-[#5810ff]">
                <HiOutlinePhone className="text-xl" />
              </a>
              <span>+234 810 964 1033</span>
            </div>
            {/* mail */}
            <div className="flex items-center gap-4 text-lg">
              <a href="mailto:ubiebisarah6@gmail.com" className="text-[#5810ff]">
                <HiOutlineMail className="text-xl" />
              </a>
              <span>ubiebisarah6@gmail.com</span>
            </div>
          </div>
          {/* socials */}
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex  2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-[#5810ff] text-white hover:bg-[#4a0bde] transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        {/* blob & image */}
        <div className=" hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyles="w-[560px] h-[560px] " />
          <Image
            src={avatarImgg}
            alt=""
            width={400}
            height={800}
            quality={100}
            className="absolute -top-30 left-[100px] "
          />
          <div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d091a] via-[#0d091a]/90 to-[#0d091a]/40"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
