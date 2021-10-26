import { Grid, Typography } from "@material-ui/core";
import React from "react";

const BioEntry = (props) => {
  const { date, content } = props;

  return (
    // grid with two columns
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Typography
          variant="body1"
          style={{
            fontWeight: "bold",
          }}
        >
          {date}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">{content}</Typography>
      </Grid>
    </Grid>
  );
};

export default BioEntry;
