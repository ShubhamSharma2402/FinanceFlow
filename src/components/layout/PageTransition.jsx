import { motion } from "framer-motion";

const transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(3px)" }}
      transition={transition}
      className="w-full will-change-transform"
    >
      {children}
    </motion.div>
  );
}
