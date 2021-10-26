import React from "react";
import { motion } from "framer-motion";

const CustomDiv = ({ children, ...props }) => {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default CustomDiv;
