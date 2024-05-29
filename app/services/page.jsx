"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating dynamic, user-friendly, and high-performing websites that meet the unique needs of our clients. Our comprehensive web development services cover everything from initial concept to deployment and ongoing maintenance, ensuring your online presence is robust and effective.",
    href: "",
  },
  {
    num: "02",
    title: "UX/UI Design",
    description:
      "I create visually stunning and highly intuitive user experiences that delight users and drive engagement. UX/UI design services focus on understanding the needs and behaviors of your users to create interfaces that are not only beautiful but also highly functional and user-friendly.",
    href: "",
  },
  {
    num: "03",
    title: "Database Design",
    description:
      "I provide expert database design services that ensure your data is organized, secure, and accessible. My goal is to create efficient, scalable, and reliable databases that support your business operations and growth.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I specialize in optimizing your online presence to ensure that your business ranks higher in search engine results. My SEO services are designed to drive targeted traffic, enhance visibility, and increase conversions. ",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* tap */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
