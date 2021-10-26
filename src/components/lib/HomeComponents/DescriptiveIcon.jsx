import React from "react";
import { Typography } from "@material-ui/core";
import CustomDiv from "../CustomDiv";

const DescriptiveIcon = (props) => {
  const { icon, content } = props;

  return (
    <CustomDiv>
      {icon}
      <Typography variant="h6" style={{ marginTop: "10px" }}>
        {content}
      </Typography>
    </CustomDiv>
  );
};

export default DescriptiveIcon;
