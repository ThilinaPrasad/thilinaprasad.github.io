import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import HoverPattern from "./Hover/HoverPattern";

export default function ProjectCard({ title, description, icon, tags, colSpan }) {
  // const tags = ["GitHub", "React", "JamStack"];
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={`group mt-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full col-span-${colSpan ? colSpan : '1'}`}
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

        <div className="flex flex-col items-start  dark:border-gray-800 rounded p-4 relative">
          <div className="my-4">
            <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {icon}&nbsp;&nbsp;{title}
            </h4>
            <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
              {description}
            </p>
            <div className="pt-4 flex md:flex-row flex-wrap">
              {tags?.map((tag, idx) => (
                <p
                  key={idx}
                  className={`leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1`}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
