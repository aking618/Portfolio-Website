import React from "react";
import { Typography } from "@material-ui/core";
import CustomAvatar from "./CustomAvatar";
import { motion } from "framer-motion";

const Header = (props) => {
  const { title, subtitle, avatarUrl } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Typography variant="h4" component="h2" style={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" component="h2">
        {subtitle}
      </Typography>
      <CustomAvatar image={avatarUrl} />
    </motion.div>
  );
};

export default Header;
