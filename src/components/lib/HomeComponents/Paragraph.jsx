import React from "react";
import ParagraphHeader from "../ParagraphHeader";
import { Typography } from "@material-ui/core";
import CustomDiv from "../CustomDiv";

const Paragraph = (props) => {
  const { sectionTitle, sectionContent, isBio = false } = props;

  return (
    <CustomDiv>
      <ParagraphHeader>
        <Typography variant="h6">{sectionTitle}</Typography>
      </ParagraphHeader>
      {!isBio ? (
        <Typography variant="body1" align="center">
          {sectionContent}
        </Typography>
      ) : (
        sectionContent
      )}
    </CustomDiv>
  );
};

export default Paragraph;
