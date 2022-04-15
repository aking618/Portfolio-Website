import React from "react";
import ContentWrapper from "../lib/ContentWrapper";
import PageHeader from "../lib/PageHeader";
import ProjectCard from "../lib/ProjectComponents/ProjectCard";
import { Grid } from "@material-ui/core";
import projects from "../../js/projects";
import { motion } from "framer-motion";
import Paragraph from "../lib/HomeComponents/Paragraph";
import Reveal from "../../react-reveal/src/Reveal";

const Projects = (props) => {
  const { styles } = props;

  return (
    <Reveal effect="fadeInUp">
      <ContentWrapper styles={styles}>
        <Paragraph
          sectionTitle="Projects"
          isBio={false}
          sectionContent={
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              {projects.map((project, index) => (
                <>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard
                      project={project}
                      styles={styles}
                      key={index}
                    />
                  </Grid>
                </>
              ))}
            </Grid>
          }
        />
      </ContentWrapper>
    </Reveal>
  );
};

export default Projects;
