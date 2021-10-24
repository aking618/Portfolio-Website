import React from "react";
import ContentWrapper from "./ContentWrapper";
import SectionHeader from "./SectionHeader";
import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";
import projects from "../js/projects";

const Projects = (props) => {
  const { styles } = props;

  return (
    <ContentWrapper styles={styles}>
      <SectionHeader title="Projects" subtitle="" />
      <Grid container spacing={1} alignItems="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={index == projects.length - 1 ? 12 : 6}
            md={index == projects.length - 1 ? 12 : 4}
            key={index}
          >
            <Card
              style={{
                borderRadius: "5px",
                padding: "10px",
                margin: "10px",
                textAlign: "center",
              }}
            >
              {project.image && (
                <CardMedia
                  component="img"
                  alt={project.title}
                  height={project.image.includes("random") ? "140" : "100%"}
                  image={project.image}
                />
              )}
              <CardContent>
                <Typography variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
                <br />
                {project.tech.length > 0 && (
                  <Typography variant="body2" component="p">
                    Technologies:
                    {project.tech.map((tech, index) => (
                      <span key={index}>
                        {tech}
                        {index !== project.tech.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: styles.linkColor }}
                  >
                    {project.linkText}
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ContentWrapper>
  );
};

export default Projects;
