import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { motion } from "framer-motion";

const ProjectCard = (props) => {
  const { project, styles } = props;

  return (
    <div
      style={{
        minWidth: "300px",
        maxWidth: "300px",
        margin: "0 auto",
      }}
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
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "200px",
              maxWidth: "200px",
            }}
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
              Technologies:{"  "}
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
          {project.demoLink && (
            <Button
              size="small"
              color="primary"
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                variant="body2"
                component="p"
                style={{ color: styles.linkColor }}
              >
                Demo
              </Typography>
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
