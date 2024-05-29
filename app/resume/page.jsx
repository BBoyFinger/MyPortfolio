"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNuxtdotjs,
  SiMongodb,
  SiElasticsearch,
  SiRedis,
  SiPrisma,
  SiFirebase,
} from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { easeIn, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
// about data
const about = {
  title: "About me",
  description:
    "I am a full-stack developer based in Hanoi and proficient in various programming languages and technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vu Ngoc Tu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84 865 607 681)",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+",
    },
    {
      fieldName: "Facebook",
      fieldValue: "Vũ Tú",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnam",
    },
    {
      fieldName: "Email",
      fieldValue: "tuvngdevsl@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Vietnamese",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a Fresher Web Developer, I have gained hands-on experience in front-end and back-end web development. During my one year with the company, I have contributed to various projects.",
  items: [
    {
      company: "Hamsa Company",
      position: "Fullstack Developer",
      duration: "2022-2023",
    },
    {
      company: "FPT Software",
      position: "Front-end Developer Intern",
      duration: "2023",
    },
    {
      company: "VNT Company",
      position: "Fullstack Developer",
      duration: "Spring 2024 - Present",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "During my time at Greenwich University, I acquired a solid foundation in computer science principles and practical skills that have been essential in my professional development. My coursework and projects covered a wide range of topics, preparing me for a successful career in web development and related fields.",
  items: [
    {
      institution: "Greenwich University Alliance with FPT Education",
      degree: "Upper Second Class",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Over the past year, I have accumulated valuable experience in the field of fullstack development. I have become proficient in using modern web technologies like HTML, CSS, JavaScript and popular frameworks like React.js , Vue.js, NodeJS...",
  skillList: [
    { icon: <FaHtml5 />, name: "Html 5" },
    { icon: <FaCss3 />, name: "Css 3" },
    { icon: <FaJs />, name: "Javascript" },
    { icon: <FaReact />, name: "React JS" },
    { icon: <FaVuejs />, name: "Vue JS" },
    { icon: <SiTailwindcss />, name: "Tailwin CSS" },
    { icon: <FaNodeJs />, name: "Node JS" },
    { icon: <SiNuxtdotjs />, name: "Nuxt 3" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiMongodb />, name: "Mongo DB" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiElasticsearch />, name: "Elasticsearch" },
    { icon: <SiFirebase />, name: "Firebase" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span class="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span class="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              Skills
              <div className="flex flex-col gap-[30px]">
                <div>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
