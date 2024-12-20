"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "This is my most recent front-end project. I used shadcn/ui framework and its theme changing component.",
    stack: [
      { name: "Html" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Shadcn/ui" },
    ],
    image: "/assets/work/portfolio.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "This is a fullstack group project from Pinecone academy.",
    stack: [
      { name: "Typescript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/food-delivery.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "This is a frontend project from Pinecone academy focused on grid. This is an API call to an external API, processing data on the client-side, and not interacting with a backend server.",
    stack: [
      { name: "Html" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
      { name: "Next.js" },
    ],
    image: "/assets/work/blog.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "This is a Pinecone academy frontend project, a clone site of www.gogo.mn",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/work/gogo.jpg",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description:
      "This is my very first html, css, javascript project at Pinecone academy.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/work/khuvsgul-trip.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full flex flex-col px-4"
    >
      <div className="container mx-auto bg-slate-100 dark:bg-slate-800 rounded-2xl p-5 xl:p-10">
        {/* <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:px-10"> */}
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none text-black dark:text-white font-extrabold text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none dark:text-white transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="dark:text-white/60">{project.description}</p>
              {/* stack names */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl dark:text-white">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border  */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full border border-black bg-slate-50 hover:bg-slate-200 flex justify-center items-center group">
                        <BsArrowUpRight className="text-black text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full border border-black bg-slate-50 hover:bg-slate-200 flex justify-center items-center group">
                        <BsGithub className="text-black text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center   ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-xl"></div>
                      {/* image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-xl"
                          alt="img"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-black dark:bg-slate-500 hover:bg-slate-300 text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all border-black rounded-md"
              />
            </Swiper>
          </div>
        </div>

        {/* </div> */}
      </div>
    </motion.section>
  );
};

export default Work;
