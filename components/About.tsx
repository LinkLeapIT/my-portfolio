"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import me from "../public/assists/images/me.jpg";

const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 bg-white relative z-10" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="object-cover w-full h-full absolute inset-0 -z-10 overflow-hidden border-t-2 border-b-2 border-dotted"
      />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image 
            src={me} 
            alt="Profile picture" 
            width={400} 
            height={400} 
            className="rounded-full border-4 border-[#24C8D5] bg-[#3e2f39] border-dotted shadow-[0px_0px_10px_#3e2f39] p-[1px]"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-6 text-[#24C8D5] tracking-widest"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-base md:text-lg text-[#3e2f39] tracking-widest transition-all duration-300 ${!expanded ? "line-clamp-6" : ""}`}
          >
            I began my coding journey in 2022 and officially entered the development world in January 2023. I studied a Certificate IV in IT Programming from Granville TAFE and later studied a Diploma in Web Development, covering both front-end and back-end technologies. In addition, I enhanced my skills by completing over 180 online courses focused on UX, UI design, and coding best practices.
            <br /><br />
            In December 2023, I founded Link Leap IT Services, a startup dedicated to delivering custom web and mobile application solutions tailored to diverse business needs.
            <br /><br />
            My experience spans building dynamic projects with React, Next.js (using TypeScript), and React Native, while integrating powerful tools such as Firebase, Stripe, MongoDB, and NextAuth. I am passionate about learning and always eager to take on new challenges that bring innovative ideas to life.
          </motion.p>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-[#24C8D5] font-semibold hover:underline focus:outline-none"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
