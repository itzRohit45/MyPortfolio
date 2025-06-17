"use client";

import { motion } from "framer-motion";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  onClick,
  icon,
  href,
  target,
  rel,
  ...props
}) {
  const buttonContent = (
    <>
      {icon && (
        <span
          className={`${styles.icon} ${
            variant === "secondary" ? styles.secondaryIcon : ""
          }`}
        >
          {icon}
        </span>
      )}
      <span
        className={`${styles.text} ${
          variant === "secondary" ? styles.secondaryText : ""
        }`}
      >
        {children}
      </span>
    </>
  );

  const variants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // If href is provided, render as an <a> tag
  if (href) {
    return (
      <motion.a
        href={href}
        className={`${styles.button} ${styles[variant]}`}
        target={target}
        rel={rel}
        variants={variants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  // Otherwise, render as a button
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      variants={variants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}
