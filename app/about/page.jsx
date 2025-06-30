"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Blob from "@/components/Blob";
import Stats from "@/components/Stats";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className=" hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative ">
            <Image
              src="/Me4.png"
              width={320}
              height={200}
              alt=" "
              className="z-20 relative object-cover"
            />
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[530px] right-0 bg-gradient-to-t  from-[#0d091a] via-[#0d091a]/90 z-30"></div>
            {/* blob */}
            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]" />
            </div>

            <Socials
              containerStyles="flex gap-4 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-[#5810ff] hover:text-[#4a0bde] flex 
            items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2 w-2 bg-[#5810ff] rounded-full "></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-[#5810ff]">Sarah</span> Ubiebi
              </h2>
              <p className="max-w-[540px] mb-12">
                I focus on creating visually stunning, user-friendly web
                experiences that not only look great but function seamlessly,
                ensuring every detail is carefully designed and executed.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonials />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
