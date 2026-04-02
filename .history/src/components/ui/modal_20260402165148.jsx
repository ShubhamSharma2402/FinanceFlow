import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const Modal = ({ open, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{
              duration: 0.35,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 w-[90%] max-w-md shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {title}
              </h2>

              <button onClick={onClose} className="text-gray-600 dark:text-gray-300 hover:text-gray-800">
                ✕
              </button>
            </div>

            {children}

            <div className="mt-6 flex justify-end">
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;