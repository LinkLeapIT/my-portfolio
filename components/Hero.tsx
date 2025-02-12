"use client"
import React from 'react';
import { motion } from 'framer-motion';
import bgHero from "../public/assists/images/bg-hero.jpg";
import code from "../public/assists/images/div.png"

const headingText = "Hello, I'm Safwan";
const letters = headingText.split("");

// Container variants for stagger effect (hero heading)
const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Child variants for each letter (hero heading)
const letterVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};


const Hero: React.FC = () => {
  return (
    <section 
        className="relative flex items-center justify-center h-screen"
    >
        <div className='h-screen absolute inset-0 top-0 left-0 w-full bg-gradient-to-r from-[#303030] via-[#303030] to-[#030303] overflow-hidden z-10 opacity-90'></div>
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={bgHero.src} 
          alt="Background Hero" 
          className="object-cover w-full h-full absolute inset-0"
          style={{ fontFamily: 'var(--font-cinzel), sans-serif' }}
        />
      {/* Animated Text */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.div
          className="
            relative
            text-2xl
            md:text-4xl
            lg:text-5xl
            font-extrabold
            bg-clip-text
            text-transparent
            bg-gradient-to-l
            from-[#24C8D5]
            to-[#c88edb]
            flex
            items-center
            justify-center
          "
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              <p className='text-center px-[1px]'>{letter === " " ? "\u00A0" : letter}</p>
            </motion.span>
          ))}
        </motion.div>
        <p className="mt-4 text-lg md:text-2xl text-white px-2 tracking-widest">
          Front-End React &amp; React Native Developer
        </p>
      </motion.div>
      {/* Animated SVG */}
      <motion.img
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        src={code.src}
        alt="Animated Code"
        className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-14 md:w-20 h-14 md:h-20 bg-gradient-to-l from-[#24C8D5] to-[#c88edb] rounded-full z-20 opacity-80"
      />
    </section>
  );
};

export default Hero;
