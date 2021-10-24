import React from "react";
import { Typography } from "@material-ui/core";

const ParagraphHeader = ({ children }) => (
  <Typography
    variant="h5"
    component="h2"
    style={{
      textDecoration: "underline",
      fontSize: 20,
      textUnderlineOffset: 6,
      textDecorationColor: "#525252",
      textDecorationThickness: 4,
      marginTop: 3,
      marginBottom: 16,
    }}
  >
    {children}
  </Typography>
);

export default ParagraphHeader;
