import React from "react";
import ContentWrapper from "../lib/ContentWrapper";
import PageHeader from "../lib/PageHeader";
import { Grid, Typography } from "@material-ui/core";
import education from "../../js/education";
import skills from "../../js/skills";
import experience from "../../js/experience";
import ParagraphHeader from "../lib/ParagraphHeader";
import EducationText from "../lib/ResumeComponents/EducationText";
import SkillsText from "../lib/ResumeComponents/SkillsText";
import ExperienceText from "../lib/ResumeComponents/ExperienceText";
import Paragraph from "../lib/HomeComponents/Paragraph";

const Resume = ({ styles }) => {
  return (
    <ContentWrapper styles={styles}>
      <Paragraph
        sectionTitle="Resume"
        isBio={false}
        sectionContent={
          <>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ParagraphHeader>
                  <Typography variant="h6">Education</Typography>
                </ParagraphHeader>
                {education.map((item, index) => {
                  return (
                    <Grid item xs={12}>
                      <EducationText education={item} />
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item xs={12} sm={3} />
              <Grid item xs={12} sm={6}>
                <ParagraphHeader>
                  <Typography variant="h6">Skills</Typography>
                </ParagraphHeader>
                <SkillsText skills={skills} />
              </Grid>
              <Grid item xs={12} sm={3} />
              <Grid item xs={12}>
                <ParagraphHeader>
                  <Typography variant="h6">Experience</Typography>
                </ParagraphHeader>
                {experience.map((item, index) => {
                  return (
                    <Grid item xs={12}>
                      <ExperienceText experience={item} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </>
        }
      />
    </ContentWrapper>
  );
};

export default Resume;
