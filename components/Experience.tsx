"use client";
import React from "react";
import { motion } from "framer-motion";
import bgExp from "../public/assists/images/bg-exp.jpg";
import Link from "next/link";
import { RiArrowRightDownFill } from "react-icons/ri";

const experiences = [
  {
    date: "2023",
    Name: "Designer Haus",
    description:
      "Developed an e-commerce web application for a jewellery shop. The platform offers intuitive product browsing, sorting, interactive liking, and an admin dashboard for efficient inventory management. Built using React and Firebase for data storage, authentication, and hosting.",
    link: "https://my-react-app-e6b2b.web.app/",
  },
  {
    date: "2023",
    Name: "Allora - Website",
    description:
      "Created a dynamic website for Italyn Restaurant featuring an online menu integrated with Stripe for secure payments and Firebase for data management. Developed with Next.js and TypeScript to deliver a modern, scalable front-end experience.",
    link: "/comming-soon",
  },
  {
    date: "2024",
    Name: "Allora - Mobile App",
    description:
      "Developed a native mobile application for online orders that complements the restaurant’s digital platform. This solution was built using React Native to provide a seamless user experience on mobile devices.",
    link: "/comming-soon",
  },
  {
    date: "6/2024 - 2/2025",
    Name: "OTS",
    description:
      "Designed and implemented a promotional web application for On The Spot. This project offers exclusive discounts and free giveaways by integrating NextAuth for authentication, MongoDB for backend storage, Firebase for media hosting, and Stripe for payment processing.",
    link: "https://ots-pearl.vercel.app/",
  },
  {
    date: "2024/2025",
    Name: "Student World",
    description:
      "Streamlined student information collection during my internship at Student World by developing an online form that enhanced team collaboration and improved operational efficiency.",
    link: "https://sw-form.vercel.app/",
  },
  {
    date: "2024",
    Name: "Misc",
    description:
      "Developed 'MISC. Bible', a comprehensive training platform for Misc. Paramatta Restaurant. The application provides detailed training guides, interactive quizzes, and a customizable admin dashboard to efficiently manage content. Built with Next.js for the front-end, Clerk for secure authentication, and MongoDB for data storage.",
    link: "/comming-soon",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100 relative" id="experience">
      {/* Background Overlay */}
      <div className="h-auto absolute inset-0 top-0 left-0 w-full bg-gradient-to-r from-[#3e2f39] via-[#3e2f39] to-[#030303] overflow-hidden z-10 opacity-75 border-t-2 border-b-2 border-[#24C8D5] border-dotted shadow-[0px_0px_10px_#3e2f39]"></div>
      
      {/* Background Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={bgExp.src}
        alt="Background Hero"
        className="object-cover w-full h-full absolute inset-0"
      />
      
      <div className="relative z-10 max-w-[1250px] rounded-sm mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-10 text-center text-[#24C8D5] tracking-widest"
        >
          Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover="hover"
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative block p-6 backdrop-blur-md rounded-sm w-full h-auto md:h-[380px] xl:h-[340px] mx-auto border shadow-md" // update the code so when hover on the card flip the card over for showing the the link and the logo of the project that I will import it from images 
            >
              <h3 className="text-xl font-semibold text-[#24C8D5]">
                {exp.Name}
              </h3>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              <Link href={exp.link} target="_blank" className=" absolute bottom-0 right-0 flex flex-col items-end justify-end gap-2 w-24 h-24 text-[#b762d4] transform transition-transform duration-300 hover:scale-105 hover:text-[#c88edb]">
                <p className="text-[10px] transform -rotate-45 absolute bottom-7">project link</p>
                <RiArrowRightDownFill className="text-4xl text-end"/>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
