"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkillBar from "@/components/ui/SkillBar";
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "./About.module.css";

export default function About() {
  // Sample skills list
  const skills = [
    { name: "C/C++", percentage: 90 },
    { name: "Python", percentage: 60 },
    { name: "React.js", percentage: 90 },
    { name: "Node.js/Express.js", percentage: 85 },
    { name: "JavaScript", percentage: 92 },
    { name: "HTML & CSS", percentage: 95 },
    { name: "Next.js", percentage: 50 },
  ];

  // Core competencies icons
  const competencies = [
    {
      icon: <FaReact />,
      title: "Frontend",
      text: "Modern UI with React, Next.js, and CSS-in-JS libraries",
    },
    {
      icon: <FaNodeJs />,
      title: "Backend",
      text: "RESTful APIs and GraphQL with Node.js, Express",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      text: "SQL and NoSQL databases with efficient data modeling",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive",
      text: "Mobile-first approach with responsive design patterns",
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className={styles.content}>
          <motion.div
            className={styles.imageWrapper}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.imageContainer}>
              <Image
                src="/images/profile.jpeg"
                alt="Your Name - Profile Picture"
                width={400}
                height={500}
                className={styles.profileImage}
                priority
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>

          <motion.div
            className={styles.info}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className={styles.subtitle}>Who Am I?</h3>
            <p className={styles.bio}>
              I am a passionate Full Stack Developer with a strong foundation in
              modern web technologies and a keen eye for building intuitive,
              responsive, and dynamic user experiences. With over 1.5 years of
              hands-on experience, I specialize in developing scalable and
              performant web applications using cutting-edge tools and
              frameworks across the full stack
            </p>
            <p className={styles.bio}>
              Currently, I am pursuing a B.Tech in Computer Science and
              Engineering with a specialization in Artificial Intelligence at
              the{" "}
              <b>Indian Institute of Information Technology, Kancheepuram</b>.
              My academic journey has deepened my understanding of AI and
              machine learning, allowing me to integrate intelligent systems
              into the applications I build.
            </p>

            <h3 className={styles.subtitle}>My Skills</h3>
            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.competencies}
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {competencies.map((item, index) => (
            <motion.div
              key={index}
              className={styles.competencyItem}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ y: -10 }}
            >
              <div className={styles.competencyIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
