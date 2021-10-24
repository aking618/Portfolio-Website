import React from "react";
import ContentWrapper from "./ContentWrapper";
import SectionHeader from "./SectionHeader";
import { Grid, Typography } from "@material-ui/core";
import CustomAvatar from "./CustomAvatar";
import CodeOutlined from "@material-ui/icons/CodeOutlined";
import MapOutlined from "@material-ui/icons/MapOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import GitHub from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import ParagraphHeader from "./ParagraphHeader";
import BioEntry from "./BioEntry";

const Home = (props) => {
  const { styles } = props;

  return (
    <ContentWrapper styles={styles}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={6}>
          {/* Header with name and avatar */}
          <Typography
            variant="h4"
            component="h2"
            style={{ fontWeight: "bold" }}
          >
            Ayren King
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Flutter Fanatic | E-Sports Enthusiast
          </Typography>
          <CustomAvatar image={"./assets/avatar.jpg"} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={6}>
            {/* Work info */}
            <ParagraphHeader>
              <Typography variant="h6">About Me</Typography>
            </ParagraphHeader>
            <Typography variant="body1" align="center">
              I'm a software developer with a passion for building things that
              people love. I have a background in with mobile app and web
              development with a focus on Flutter and React. I'm currently
              working at{" "}
              <a
                href="https://www.paycom.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: styles.linkColor }}
              >
                Paycom
              </a>{" "}
              as a full-stack and mobile developer intern. My experiences ranges
              from building small apps to collaborating on large enterprise
              applications.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          {/* Bio */}
          <ParagraphHeader>
            <Typography variant="h6">Bio</Typography>
          </ParagraphHeader>
          <BioEntry
            date="2000"
            content="Born in Oklahoma City, Oklahoma, USA"
          />
          <BioEntry
            date="2019"
            content="Started pursuing a Bachelor of Science in Computer Science at Oklahoma State University"
          />
          <BioEntry
            date="2020"
            content="Hired as a Mobile Developer at Oklahoma State University (Active)"
          />
          <BioEntry
            date="2021"
            content="Began working at Paycom as a Software Development Intern (Active)"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={6}>
            {/* Projects */}
            <ParagraphHeader>
              <Typography variant="h6">Projects</Typography>
            </ParagraphHeader>
            <Typography variant="body1" align="center">
              All of my projects are open source and can be found on my{" "}
              <a
                href="github.com/aking618"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: styles.linkColor }}
              >
                GitHub
              </a>{" "}
              page.
              <br />
              My projects can be found on the{" "}
              <Link to="/projects" style={{ color: styles.linkColor }}>
                Projects
              </Link>{" "}
              page.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={6}>
            {/* Resume */}
            <ParagraphHeader>
              <Typography variant="h6">Resume</Typography>
            </ParagraphHeader>
            <Typography variant="body1" align="center">
              My resume can be found on the{" "}
              <Link to="/resume" style={{ color: styles.linkColor }}>
                Resume
              </Link>{" "}
              page.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <CodeOutlined />
            <Typography variant="h6" style={{ marginTop: "10px" }}>
              Full Stack Developer
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MapOutlined />
            <Typography variant="h6" style={{ marginTop: "10px" }}>
              Stillwater, OK
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <EmailOutlined />

            <Typography variant="h6" style={{ marginTop: "10px" }}>
              Email:{" "}
              <a
                style={{ color: styles.linkColor }}
                href="mailto:aking.college@gmail.com"
              >
                aking.college@gmail.com
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <GitHub />
            <Typography variant="h6" style={{ marginTop: "10px" }}>
              GitHub:{" "}
              <a style={{ color: styles.linkColor }} href="aking618.github.com">
                Aking618
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default Home;
