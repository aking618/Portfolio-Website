import React from "react";
import { Typography } from "@material-ui/core";
import CustomDiv from "../CustomDiv";

const EducationText = ({ education }) => {
  return (
    <CustomDiv>
      <Typography variant="body1" component="p">
        <strong>{education.degree}</strong>
        {" - "}
        {education.major}
      </Typography>
      <Typography variant="body2" component="p">
        {education.school}
      </Typography>
      <Typography variant="body2" component="p">
        {education.location}
      </Typography>
      <Typography variant="body2" component="p">
        GPA: {education.gpa}
      </Typography>
      <Typography variant="body2" component="p">
        Graduation: {education.graduation}
      </Typography>
    </CustomDiv>
  );
};

export default EducationText;
