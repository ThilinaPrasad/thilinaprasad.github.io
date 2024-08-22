import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { useIsFontReady } from "@/lib/useIsFontReady";

import { useTheme } from "next-themes";
import Talks from "@/components/Talks";
import Header from "@/components/Header";
import Social from "@/components/Social";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";

export default function Home() {
  const [colors, setColors] = useState([]);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <Container
      title="Thilina J"
      description="Personl Website"
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-6">
        <Header />
        <Skills />
        <Achievements />
        {/* <Timeline /> */}
        <Social />
      </div>
    </Container>
  );
}
