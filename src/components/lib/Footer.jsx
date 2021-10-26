import { Box } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <Box
      align="center"
      mt={5}
      style={{
        padding: "0.5rem",
      }}
    >
      &copy; {new Date().getFullYear()} Ayren King. All Rights Reserved.
    </Box>
  );
};

export default Footer;
