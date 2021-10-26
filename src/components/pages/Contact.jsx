import {
  Backdrop,
  Button,
  Grid,
  CircularProgress,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import ContentWrapper from "../lib/ContentWrapper";
import PageHeader from "../lib/PageHeader";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "yellow",
  },
}));

const Contact = (props) => {
  const { styles } = props;
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        e.target,
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        (response) => {
          setName("");
          setEmail("");
          setMessage("");
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
        },
        (err) => {
          setError(true);
          console.log("FAILED...", err);
          setLoading(false);
        }
      );
  };

  return (
    <ContentWrapper styles={styles}>
      <PageHeader title="Contact" subtitle="Get in touch with me" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              <strong>Name</strong>
            </Typography>
            <TextField
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={error}
              onError={() => setError(true)}
              id="name"
              label="Name"
              margin="normal"
              name="from_name"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              <strong>Email</strong>
            </Typography>
            <TextField
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              onError={() => setError(true)}
              id="email"
              label="Email"
              margin="normal"
              name="from_email"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              <strong>Message</strong>
            </Typography>
            <TextField
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={error}
              onError={() => setError(true)}
              id="message"
              label="Message"
              margin="normal"
              name="message"
              required
              variant="outlined"
              multiline
              rows="4"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              fullWidth
              size="large"
              variant="contained"
              type="submit"
              disabled={loading}
            >
              <Typography variant="h6">
                <strong>{!loading ? "Send" : "Sending..."}</strong>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="primary" variant="indeterminate" />
      </Backdrop>
    </ContentWrapper>
  );
};

export default Contact;
