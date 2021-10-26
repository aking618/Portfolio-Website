import React from "react";
import Typography from "@material-ui/core/Typography";
import CustomDiv from "../CustomDiv";

const ExperienceText = ({ experience }) => {
  return (
    <CustomDiv>
      <Typography
        variant="body1"
        component="p"
        style={{
          textDecoration: "underline",
        }}
      >
        <strong>{experience.title}</strong>
      </Typography>
      <Typography variant="body2" component="p">
        {experience.company}
      </Typography>
      <Typography variant="body2" component="p">
        {experience.location}
      </Typography>
      <Typography variant="body2" component="p">
        {experience.dates}
      </Typography>
      {experience.points.map((point, index) => {
        return (
          <Typography variant="body2" component="p">
            <li>{point}</li>
          </Typography>
        );
      })}
      <br />
    </CustomDiv>
  );
};

export default ExperienceText;
