import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from "@material-ui/core";
import { motion } from "framer-motion";

const ProjectCard = (props) => {
  const { project, styles } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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
    </motion.div>
  );
};

export default ProjectCard;
