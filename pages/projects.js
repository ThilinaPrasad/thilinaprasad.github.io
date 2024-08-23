import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";

export default function projects() {
  return (
    <Container
      title="Projects – Thilina Jayathilaka"
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-6">
        Experience is the knowledge, skills, and insights gained through direct involvement in events, tasks, or activities over time.
        </h2>

        <div className="md:grid md:grid-cols-2 grid-cols-1 gap-x-4">
          <ProjectCard
            title="Enactor Deployment Portal"
            description="I played a key role in the Enactor Deployment Portal project, streamlining cloud-based deployments. I designed a scalable REST API backend with Java EE and Jersey, created a React.js dashboard for real-time monitoring, and automated Docker stat reporting. I replaced Jenkins with AWS Systems Manager (SSM) for private deployments and automated Windows MSI deployments using Ansible and PowerShell. Additionally, I developed deployment templates for consistent test, UAT, and production environments."
            icon="👨‍💻"
            colSpan={2}
            tags={["React.js", "Java EE", "Amazon Web Services (AWS)", "Terraform", "Ansible", "Groovy", "Jenkins", "Python", "REST APIs"]}
          />
          <ProjectCard
            title="Enactor Product - S3 Integration"
            description="I developed a solution for storing Enactor files in AWS S3 using the AWS S3 Java SDK. This included creating a configurable FileSystem API, exposing a Java servlet in a microservice for seamless client interaction, and automating S3-specific deployments with Terraform, Groovy, and Jenkins. The solution is now used in all new customer production environments."
            icon="👨‍💻"
            colSpan={2}
            tags={["Java EE", "Amazon S3", "Servlets", "AWS SDK", "Terraform", "AWS Identity and Access Management (AWS IAM)", "Groovy", "Jenkins"]}
          />
          <ProjectCard
            title="BackPacker - Travel Location Recommendation System"
            description="I developed a mobile app for travel location recommendations, using device sensors and user feedback to provide accurate data. The app helps travelers plan their destinations with real-time reviews and a map view for better decision-making."
            icon="👨‍💻"
            colSpan={2}
            tags={["Ionic Framework", "Android", "Google Maps API", "TypeScript", "JavaScript", "Firebase"]}
          />
          <ProjectCard
            title="An Intelligent Sinhala-English Dictionary / Thesaurus / Word Look-Up Tool"
            description="For my BSc final year project, I developed a Sinhala thesaurus system featuring a language identifier, spell-checker, and word cluster generator using FastText NLP. I created a Sinhala FastText model from old book data with Prof. Sandagomi Cooparahewa, integrated Google Text-to-Speech, and delivered a user-friendly web and mobile application."
            icon="👨‍💻"
            colSpan={2}
          />
          <ProjectCard
            title="Deep Learning Based Sinhala-English Language Identifier"
            description="For my BSc final year project, I developed a Sinhala thesaurus system featuring a language identifier, spell-checker, and word cluster generator using FastText NLP. I created a Sinhala FastText model from old book data with Prof. Sandagomi Cooparahewa, integrated Google Text-to-Speech, and delivered a user-friendly web and mobile application."
            icon="👨‍💻"
            colSpan={2}
            tags={["Python", "Jupiter notebook"]}
          />
          <ProjectCard
            title="LensView"
            description="LensView is a web application which helps to manage online photography contests. Photography contest organizers can easily create free online contests for all public users on internet. Then photographer who registered to the system can submit the photographs to the available contests. Then the voters can see the available contests to vote in the system voting section and can add votes to uploaded photographs. Then contest admins can see the no. of votes and can select the winners of the competitions."
            icon="👨‍💻"
            colSpan={2}
            tags={["Laravel", "JJQuery", "MySQL"]}
          />
          <ProjectCard
            title="Livepin"
            description="A way to interact for remote teams in their cooperate work."
            icon="👨‍💻"
            colSpan={2}
            tags={["React", "Agora", "AWS Lambda", "Serverless", "WebRTC"]}
          />
          <ProjectCard
            title="Manipulation Detection in Stock Trading"
            description="Final year research project. A machine learning-aided model to detect anomalies in stock trading data featuring graphical analysis."
            icon="👨‍💻"
            colSpan={2}
            tags={["Python", "Machine Learning", "Flask"]}
          />
        </div>

        {/* 🎶 A music streaming website (like spotify) built using PHP, HTML/CSS, AJAX, JS, jQuery, JSON, mySQL and more. */}
        {/* <Contact /> */}
      </div>
    </Container>
  );
}
