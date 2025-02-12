"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-l from-[#3e2f39] via-[#3e2f39] to-[#030303] file:shadow-md border-t-2 border-b-2 border-[#24C8D5] bg-[#3e2f39] border-dotted shadow-[0px_0px_10px_#3e2f39]" id="contact">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-[#24C8D5] mb-4 tracking-widest"
        >
          Let&apos;s Work Together!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white mb-8"
        >
          I&apos;m available for freelance projects and collaborations. Feel free to reach out!
        </motion.p>
        <motion.a
          href="mailto:safwan.altawil@gmail.com"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 bg-gradient-to-br from-white/80 to-[#24C8D5] shadow-[0px_0px_12px_#24C8D5] relative"
        >
        <div className='absolute inset-0'>
            <div className='absolute inset-0 border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)] rounded-lg'></div>
            <div className='absolute inset-0 border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)] rounded-lg'></div>
            <div className='absolute inset-0 shadow-[0_0_10px_#c88edb_inset] rounded-lg'></div>
        </div>
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
