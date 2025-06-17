"use client";

import { motion } from "framer-motion";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({
  title,
  company,
  date,
  description,
  skills,
  isLeft,
  index,
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      className={`${styles.timelineItem} ${
        isLeft ? styles.left : styles.right
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.content}>
        <div className={styles.date}>{date}</div>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.company}>{company}</h4>
        <p className={styles.description}>{description}</p>

        {skills && skills.length > 0 && (
          <div className={styles.skills}>
            {skills.map((skill, i) => (
              <span key={i} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
