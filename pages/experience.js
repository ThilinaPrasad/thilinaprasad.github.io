import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { getFileBySlug } from "@/lib/mdx";
import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/blog";
import PageLayout from "@/layouts/page";

export default function Experience({ mdxSource }) {
  // console.log(props);

  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Container
      title="Experience – Thilina Jayathilaka"
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        {/* <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Experience & Education
        </h1> */}

        <PageLayout>{content}</PageLayout>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const post = await getFileBySlug("experience");

  return { props: post };
}

