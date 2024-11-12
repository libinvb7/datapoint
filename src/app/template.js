"use client";

import Footer from "@/components/common/Footer";
import { NavbarDemo } from "@/components/common/NavbarDemo";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
        <NavbarDemo />
      {children}
      <Footer/>
    </motion.div>
  );
}
