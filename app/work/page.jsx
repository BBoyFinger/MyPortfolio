"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Weather App",
    description:
      "A weather website provides up-to-date weather information, including current conditions, forecasts, radar images, and severe weather alerts. Users can view detailed weather data for their location or search for weather information in other cities around the world. ",
    stack: [{ name: "React.JS" }, { name: "API Weather" }],
    image: "/assets/work/project1.png",
    live: "https://weather-today-app-vnt.netlify.app",
    github: "https://github.com/BBoyFinger/weather",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Shop Pet",
    description:
      "A Shoppet website is an online platform where users can browse, purchase, and review pet products. It offers a wide range of items including pet food, toys, grooming supplies, and accessories for various pets like dogs, cats...",
    stack: [{ name: "ReactJS" }, { name: "Bootstrap" }, { name: "NodeJS" }],
    image: "/assets/work/project2.png",
    live: "https://shop-pet.vercel.app/",
    github: "https://github.com/BBoyFinger/ShopPet",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Free shipping bar application",
    description:
      "Freeshippingbar is a customizable app that displays a banner on your online store, informing customers about free shipping promotions. ",
    stack: [
      { name: "ReactJS" },
      { name: "Polaris" },
      { name: "NodeJS" },
      { name: "Shopify CLI" },
    ],
    image: "/assets/work/project3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Geishatei",
    description:
      "The Geishatei website showcases a traditional Japanese dining experience, offering authentic cuisine and cultural performances inspired by geisha artistry. Visitors can explore the menu, make reservations, and learn about special events. The site features elegant design reflecting Japanese aesthetics, providing a seamless browsing experience for those seeking a unique and immersive dining adventure.",
    stack: [
      { name: "Nuxt 3" },
      { name: "Tailwin css" },
      { name: "NodeJS" },
      { name: "Antd vue" },
    ],
    image: "/assets/work/project4.png",
    live: "https://geishatei.vercel.app/",
    github: "",
  },
  {
    num: "05",
    category: "Frontend",
    title: "VNT Company",
    description:
      "The VNT Company JP website provides an overview of the company's services and operations in Japan. It features information about their expertise, products, and solutions tailored to various industries. Visitors can learn about the company's history, mission, and values, as well as explore career opportunities and contact details. ",
    stack: [{ name: "Nuxt 3" }, { name: "Antd vue" }],
    image: "/assets/work/project5.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Frontend",
    title: "VNT Hisano",
    description:
      "The Hisano JP website showcases the company's range of high-quality products and services in Japan. It includes detailed information about their offerings, company background, and commitment to excellence.  ",
    stack: [{ name: "Nuxt 3" }, { name: "Antd vue" }],
    image: "/assets/work/project6.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Dashboard",
    description: "Learning NextJS ",
    stack: [{ name: "NextJS" }, { name: "Tailwin css" }],
    image: "/assets/work/project7.png",
    live: "https://next-js-dashboard-9mdj.vercel.app/dashboard",
    github: "https://github.com/BBoyFinger/NextJS-Dashboard",
  },
  {
    num: "08",
    category: "Fullstack",
    title: "Teaware E-commerce",
    description: "Teaware E-commerce is an e-commerce platform specializing in providing high-end teaware products, helping users easily search, select and shop for tea sets, teapots, tea trays, tea filters and many other accessories.",
    stack: [{ name: "NextJS" }, { name: "Tailwin css" }],
    image: "/assets/work/Teaware.png",
    live: "https://tea-ware-fe.vercel.app/",
    github: "https://github.com/BBoyFinger/Tea-ware-FE",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    console.log(currentIndex);
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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Ouline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <h3 className=" font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              {/* stack */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github respository</p>
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
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div>
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons  */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
