"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import styles from "./Footer.module.css";
import { fadeIn } from "@/utils/motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/itzRohit45" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/rohit-kumar-86a437282/",
    },
    { icon: <FaTwitter />, url: "https://x.com/Itzz_rohit88" },
    { icon: <FaEnvelope />, url: "mailto:rohit9060755@gmail.com" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.simpleFooter}>
            <div className={styles.footerLeft}>
              <h2 className={styles.name}>Rohit Kumar</h2>
              <p className={styles.copyright}>
                &copy; {currentYear} All rights reserved.
              </p>
            </div>

            <ul className={styles.socialIcons}>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
