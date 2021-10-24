import React from "react";
import ContentWrapper from "./ContentWrapper";
import SectionHeader from "./SectionHeader";
import { Grid, Typography } from "@material-ui/core";
import education from "../js/education";
import skills from "../js/skills";
import experience from "../js/experience";
import ParagraphHeader from "./ParagraphHeader";

const Resume = ({ styles }) => {
  return (
    <ContentWrapper styles={styles}>
      <SectionHeader title="Resume" subtitle="" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParagraphHeader>
            <Typography variant="h6">Education</Typography>
          </ParagraphHeader>
          {education.map((item, index) => {
            return (
              <Grid item xs={12}>
                <Typography variant="body1" component="p">
                  <strong>{item.degree}</strong>
                  {" - "}
                  {item.major}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.school}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.location}
                </Typography>
                <Typography variant="body2" component="p">
                  GPA: {item.gpa}
                </Typography>
                <Typography variant="body2" component="p">
                  Graduation: {item.graduation}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12}>
          <ParagraphHeader>
            <Typography variant="h6">Skills</Typography>
          </ParagraphHeader>
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
        </Grid>
        <Grid item xs={12}>
          <ParagraphHeader>
            <Typography variant="h6">Experience</Typography>
          </ParagraphHeader>
          {experience.map((item, index) => {
            return (
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  component="p"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  <strong>{item.title}</strong>
                </Typography>
                <Typography variant="body2" component="p">
                  {item.company}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.location}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.dates}
                </Typography>
                {item.points.map((point, index) => {
                  return (
                    <Typography variant="body2" component="p">
                      <li>{point}</li>
                    </Typography>
                  );
                })}
                <br />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default Resume;
