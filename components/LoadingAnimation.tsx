"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <div className="text-center">
            {/* Animated logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5 
              }}
              className="mb-8"
            >
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg glow-animation"></div>
                <div className="absolute inset-0 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-20"></div>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Vinay Chanamallu
            </motion.h2>

            {/* Loading bar */}
            <div className="w-64 mx-auto">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              ></motion.div>
            </div>

            {/* Loading dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                ></motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}