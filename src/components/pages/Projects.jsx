import React from "react";
import ContentWrapper from "../lib/ContentWrapper";
import PageHeader from "../lib/PageHeader";
import ProjectCard from "../lib/ProjectComponents/ProjectCard";
import { Grid } from "@material-ui/core";
import projects from "../../js/projects";

const Projects = (props) => {
  const { styles } = props;

  return (
    <ContentWrapper styles={styles}>
      <PageHeader title="Projects" subtitle="" />
      <Grid container spacing={1} alignItems="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={index == projects.length - 1 ? 12 : 6}
            md={index == projects.length - 1 ? 12 : 4}
            key={index}
          >
            <ProjectCard project={project} styles={styles} />
          </Grid>
        ))}
      </Grid>
    </ContentWrapper>
  );
};

export default Projects;
