import React from "react";
import { Typography } from "@material-ui/core";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div
      className="section-header"
      style={{
        alignItems: "center",
        marginBottom: "2rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h2" style={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" component="h2">
        {subtitle}
      </Typography>
    </div>
  );
};

export default PageHeader;
