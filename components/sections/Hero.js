"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SpinningLogo from "@/components/3d/SpinningLogo";
import { FaArrowDown, FaFileDownload, FaPaperPlane } from "react-icons/fa";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className="container">
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I&apos;m <span className={styles.name}>Rohit Kumar</span>
            </motion.h1>

            <motion.h2
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span>I am a </span>
              <span className={styles.typewriter}>
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "Problem Solver",
                    "Tech Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.h2>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Building modern web applications with cutting-edge technologies.
              Passionate about creating seamless user experiences through clean
              and efficient code.
            </motion.p>

            <motion.div
              className={styles.buttons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                href="/resume.pdf" /* This path should match your resume's location in the public folder */
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaFileDownload />}
                download="YourName_Resume.pdf" /* Optional: specifies the downloaded filename */
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                icon={<FaPaperPlane />}
                style={{ color: "inherit" }} // Ensure text color is inherited
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SpinningLogo />
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.scrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link href="#about" aria-label="Scroll down to About section">
          <FaArrowDown />
        </Link>
      </motion.div>
    </section>
  );
}
