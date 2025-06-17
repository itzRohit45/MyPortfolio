"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useScrollReveal from "@/utils/useScrollReveal";
import styles from "./SkillBar.module.css";

export default function SkillBar({ skill, percentage }) {
  const [ref, isIntersecting] = useScrollReveal();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (isIntersecting) {
      timer = setTimeout(() => {
        setProgress(percentage);
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [isIntersecting, percentage]);

  return (
    <div ref={ref} className={styles.skillBar}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{skill}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
      <div className={styles.progressContainer}>
        <motion.div
          className={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
