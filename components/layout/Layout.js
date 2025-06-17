"use client";

import { ThemeProvider } from "@/utils/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="layout">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
