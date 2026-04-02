import React from "react";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`bg-white dark:bg-gray-800 shadow-sm rounded-xl p-5 border border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;