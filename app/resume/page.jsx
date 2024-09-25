"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium veritatis illum fuga a perspiciatis fugit iste.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Derrick Munkhbat",
    },
    {
      fieldName: "Phone",
      fieldValue: "+976 8818-1074",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Google voice",
      fieldValue: "+1 747-300-8886",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Mongolia",
    },
    {
      fieldName: "Email",
      fieldValue: "derrick.munkhbat@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Mongolian, English",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium veritatis illum fuga a perspiciatis fugit iste.",
  items: [
    {
      company: "Pinecone Academy LLC.",
      position: "Full-stack Web Developer Intern",
      duration: "2024",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium veritatis illum fuga a perspiciatis fugit iste.",
  items: [
    {
      institution: "Pinecone Academy LLC",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
    {
      institution: "The University of Humanities",
      degree: "Software Engineer",
      duration: "2023",
    },
    {
      institution: "Oakton Community College",
      degree: "Graphic Design",
      duration: "2020-2021",
    },
    {
      institution: "Yorktown High School",
      degree: "High School Diploma",
      duration: "2006",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium veritatis illum fuga a perspiciatis fugit iste.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section className="h-full flex flex-col px-4">
      <div className="container mx-auto bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:px-10"></div>
      </div>
    </section>
  );
};

export default Resume;
