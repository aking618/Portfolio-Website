import React from "react";
import { Typography } from "@material-ui/core";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div
      className="section-header"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" className="section-title">
        {title}
      </Typography>
      <Typography variant="6" className="section-subtitle">
        {subtitle}
      </Typography>
    </div>
  );
};

export default SectionHeader;
