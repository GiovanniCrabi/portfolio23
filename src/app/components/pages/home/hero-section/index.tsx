"use client";

import { Button } from "@/app/components/button";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";
import { techBadgeAnimation } from "@/app/lib/animations";
import { HomePageInfo } from "@/app/types/page-info";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbBrandWhatsapp } from "react-icons/tb";

const SOCIAL_CONTACTS = [
  {
    href: "https://github.com/GiovanniCrabi",
    icon: <FiGithub />,
  },

  {
    href: "https://www.linkedin.com/in/giovanni-crabi-4522981a4/",
    icon: <FiLinkedin />,
  },

  {
    href: "https://wa.link/4d18gr",
    icon: <TbBrandWhatsapp />,
  },

  {
    href: "mailto:crabigiovanni@gmail.com",
    icon: <AiOutlineMail />,
  },
];

type HeroSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400">Hi, my name is</p>
          <h2 className="text-4xl font-medium mt-2">Giovanni Crabi</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="flex md:flex-row flex-col gap-y-8 md:gap-y-0 items-center gap-x-8 md:gap-x-12 mt-12 md:mt-16 ">
            <Button
              className="shadow-button w-11/12 md:w-80"
              onClick={handleContact}
            >
              Contact me
            </Button>

            <div className=" flex gap-x-3 text-2xl text-gray-600 ">
              {SOCIAL_CONTACTS.map((contact, i) => {
                return (
                  <a
                    key={i}
                    href={contact.href}
                    target="blank"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {contact.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Profile photo"
          />
        </motion.div>
      </div>
    </section>
  );
};
