import React from "react";
import { Typography } from "@material-ui/core";
import CustomDiv from "../CustomDiv";

const SkillsText = ({ skills }) => {
  return (
    <CustomDiv>
      <Typography variant="body1" component="p">
        <strong>Software:</strong>
      </Typography>
      {skills.software.map((item, index) => {
        return (
          <Typography variant="body2" component="p">
            <li>{item}</li>
          </Typography>
        );
      })}
      <br />
      <Typography variant="body1" component="p">
        <strong>Tools & Frameworks:</strong>
      </Typography>
      {skills.toolsAndFrameworks.map((item, index) => {
        return (
          <Typography variant="body2" component="p">
            <li>{item}</li>
          </Typography>
        );
      })}
      <br />
      <Typography variant="body1" component="p">
        <strong>Languages:</strong>
      </Typography>
      {skills.languages.map((item, index) => {
        return (
          <Typography variant="body2" component="p">
            <li>{item}</li>
          </Typography>
        );
      })}
    </CustomDiv>
  );
};

export default SkillsText;
