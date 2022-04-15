import { Grid, Typography } from "@material-ui/core";
import React from "react";

const BioEntry = (props) => {
  const { date, content } = props;

  return (
    // grid with two columns
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={1} />
      <Grid item xs={2} sm={4} md={4}>
        <Typography
          variant="body1"
          style={{
            fontWeight: "bold",
          }}
        >
          {date}
        </Typography>
      </Grid>
      <Grid item xs={10} sm={8} md={7}>
        <Typography variant="body1">{content}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={2} />
    </Grid>
  );
};

export default BioEntry;
