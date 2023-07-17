"use client";

import { SectionTitle } from "@/app/components/section-title";
import { motion } from "framer-motion";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projects"
        title="My projects"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          This section of my portfolio showcases a selection of projects that
          represent my work and skills. Each project demonstrates my creative
          ability to solve problems, utilize relevant technologies, and
          collaborate effectively in teams. I invite you to explore these
          projects to gain a deeper understanding of my professional potential
          and how I can contribute to the success of your company.
        </p>
      </motion.div>
    </section>
  );
};
