"use client";
import { motion } from "framer-motion";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

import Link from "next/link"

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-8"
    >
      <div
        className="container mx-auto w-full h-full flex flex-col items-center
      xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-[#5810ff] scrollbar-track-[#5810ff]/5 overflow-y-scroll xl:overflow-y-visible"
      >
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[680px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-[#5810ff]">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
              {/* info */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone */}
                <Link href="https://wa.me/2348109641033">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-[#5810ff]">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+234 810 964 1033</span>
                </div>
                </Link>
                {/* email */}
                <Link href="mailto:ubiebisarah6@gmail.com">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-[#5810ff]">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>ubiebisarah6@gmal.com</span>
                </div>
                </Link>
                {/* location */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-[#5810ff]">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form className="flex flex-col gap-6 items-start">
                {/* first and last name */}
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full ">
                    <Label htmlFor="name">
                      Firstname <span className="text-[#5810ff]">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full ">
                    <Label htmlFor="name">
                      Lastname <span className="text-[#5810ff]">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full ">
                  <Label htmlFor="name">
                    Email <span className="text-[#5810ff]">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>
                {/* select */}
                <div className="w-full">
                  <Label htmlFor="name">
                    I'm interested in <span className="text-[#5810ff]">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="webdev">Web Development</SelectItem>
                      <SelectItem value="videoedit">Video Editing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Message <span className="text-[#5810ff]">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write Your Message..."
                    className="min-h-[160px] bg-white/5 border-white/10 
                  focus-visible:border-[#5810ff] focus-visible:ring-[#5810ff] focus-visible:ring-[1px] resize-none p-4 selection:bg-[#5810ff] placeholder:text-white/50"
                  />
                </div>
                {/* button */}
                <button className="btn bg-[#5810ff]">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Send message</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
