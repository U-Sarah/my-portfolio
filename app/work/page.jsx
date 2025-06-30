"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    catergory: "frontend",
    title: "Multi Step Form",
    description: "HTML 5 + Javascript",
    image: "/assets/work/project1.png",
    link: "https://my-multi-step-form-three.vercel.app/",
    github: "https://github.com/U-Sarah/My-Multi-step-form.git",
    tech: ["HTML", "CSS 3", "Javascript"],
  },
  {
    id: 2,
    catergory: "frontend",
    title: "Food Website",
    description: "React",
    image: "/assets/work/project2.png",
    link: "https://food-website-snowy.vercel.app/",
    github: "https://github.com/U-Sarah/food-website.git",
    tech: ["React", "CSS 3", "Javascript"],
  },
  {
    id: 3,
    catergory: "frontend",
    title: "Flyo Landing Page",
    description: "HTML 5 + Javascript",
    image: "/assets/work/project3.png",
    link: "https://flyo-landingpage.vercel.app/",
    github: "https://github.com/U-Sarah/flyo-landingpage-repo.git",
    tech: ["HTML", "CSS 3", "Javascript"],
  },
  {
    id: 4,
    catergory: "fullstack",
    title: "MHP Landing Page",
    description: "React + Tailwind Css + Node.js",
    image: "/assets/work/project4.png",
    link: "https://www.midhouseprolimited.com/",
    github: "https://github.com/U-Sarah/mhpconstruction.git",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer-motion",
      "Node.js, MongoDB",
      "Express",
    ],
  },
  {
    id: 5,
    catergory: "fullstack",
    title: "Book Management Login Page",
    description: "React + Tailwind Css + Node.js",
    image: "/assets/work/project5.png",
    link: "https://book-management-two-pi.vercel.app/login",
    github: "https://github.com/U-Sarah/React-BE.git",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer-motion",
      "Node.js",
      "MongoDB",
      "Express",
    ],
  },
];

const categories = ["frontend", "fullstack"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-[#5810ff]">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-[#5810ff] data-[state=active]:border-[#5810ff]
              h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div
            className="h-[400px] scrollbar scrollbar-thumb-[#5810ff] scrollbar-track-[#5810ff]/5
          overflow-y-scroll xl:overflow-y-visible"
          >
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={{ Pagination }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.catergory === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3"> {project.title}</h3>
                                {/* tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px] ">
                                  <p className="mb-4"> Technoogies Used</p>
                                  <ul className="flex flex-wrap gap-6">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] 
                                        px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* button */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="btn bg-[#5810ff] flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="btn text-[#0d091a] bg-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project info */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  // className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
