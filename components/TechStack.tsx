"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase } from 'react-icons/si';

const techs = [
  { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "React Native", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-500" /> },
  { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-500" /> },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100" id="tech">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-10 text-center text-[#24C8D5] tracking-widest"
        >
          Tech Stack
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {tech.icon}
              <p className="mt-2 text-gray-700">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
