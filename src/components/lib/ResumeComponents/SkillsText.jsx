import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CustomDiv from "../CustomDiv";

const SkillsText = ({ skills }) => {
  return (
    <CustomDiv>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
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
        </Grid>
        <Grid item xs={6} sm={4}>
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
        </Grid>
        <Grid item xs={12} sm={4}>
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
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default SkillsText;
