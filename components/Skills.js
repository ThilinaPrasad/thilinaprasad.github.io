import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkPreview } from "@/components/LinkPreview";
import { BlurImage } from "./BlurImage";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: "1vh" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
    // transition: { staggerChildren: 0.5 },
    exit: { opacity: 0, y: "1vh" },
  };

  const itemA = {
    hidden: { opacity: 0, scale: 0.5, y: "1vh" },
    show: { opacity: 1, scale: 1, y: 0 },
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const skills = [
    "Java", "Spring", "Spring JPA", "React", "AWS", "Docker", 
    "Apache Kafka", "Terraform", "Jenkins", "Maven", "Groovy", 
    "Ansible", "Angular", "Ionic", "Linux", "TestNG", "JUnit", 
    "JSP", "MySQL", "Subversion", "Git"
  ];


  return (
    <div className="mt-4">
      <h1 className="font-bold text-2m mb-4">👨‍💻 Skills</h1>

      <div className="gap-x-2 gap-y-3 flex flex-row flex-wrap">
        {skills.map((skill) => {
          return (<span className="flex items-center dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-3 py-1 cursor-pointer">
            {skill}
          </span>);
        })}
      </div>
    </div>
  );
};

export default Skills;
