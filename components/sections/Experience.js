"use client";

import { motion } from "framer-motion";
import TimelineItem from "@/components/ui/TimelineItem";
import styles from "./Experience.module.css";

export default function Experience() {
  // Sample experience data
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "Technical Affairs IIITDM",
      date: "2024-2025",
      description:
        "Collaborated within a dynamic team of 5–6 members to design and develop multiple college-related web platforms, including the Tech Fest website, IEEE chapter website, and others. Spearheaded frontend and backend development using React, Node.js, and Next.js. Ensured responsive design, cross-device compatibility, and optimized performance for seamless user experience",
      skills: ["React", "Node.js", "Next.js", "Bootstrap", "Tailwind CSS"],
    },
    // {
    //   id: 2,
    //   title: "Full Stack Developer",
    //   company: "Digital Solutions Co.",
    //   date: "2021 - 2023",
    //   description:
    //     "Developed and maintained multiple client projects. Created RESTful APIs, integrated third-party services, and implemented CI/CD pipelines.",
    //   skills: ["JavaScript", "TypeScript", "React", "Express", "MongoDB"],
    // },
    // {
    //   id: 3,
    //   title: "Frontend Developer",
    //   company: "WebCreative Agency",
    //   date: "2019 - 2021",
    //   description:
    //     "Built responsive user interfaces for client websites and web applications. Collaborated with designers to implement pixel-perfect designs.",
    //   skills: ["HTML", "CSS", "JavaScript", "React", "SASS"],
    // },
    // {
    //   id: 4,
    //   title: "Web Developer Intern",
    //   company: "StartUp Ventures",
    //   date: "2018 - 2019",
    //   description:
    //     "Assisted in developing website features and fixing bugs. Gained hands-on experience with modern web development practices.",
    //   skills: ["HTML", "CSS", "JavaScript", "jQuery"],
    // },
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Experience
        </motion.h2>

        <div className={styles.timeline}>
          <div className={styles.line}></div>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              skills={exp.skills}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
