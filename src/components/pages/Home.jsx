import React from "react";
import ContentWrapper from "../lib/ContentWrapper";
import { Grid, Typography } from "@material-ui/core";
import CodeOutlined from "@material-ui/icons/CodeOutlined";
import MapOutlined from "@material-ui/icons/MapOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import GitHub from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import BioEntry from "../lib/HomeComponents/BioEntry";
import Header from "../lib/HomeComponents/Header";
import Paragraph from "../lib/HomeComponents/Paragraph";
import DescriptiveIcon from "../lib/HomeComponents/DescriptiveIcon";

const Home = (props) => {
  const { styles } = props;

  return (
    <ContentWrapper styles={styles}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={6}>
          {/* Header with name and avatar */}
          <Header
            title="Ayren King"
            subtitle="Flutter Fanatic | E-Sports Enthusiast"
            avatarUrl="/assets/avatar.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={6}>
            {/* About Me */}
            <Paragraph
              sectionTitle="About Me"
              sectionContent={
                <>
                  I'm a software developer with a passion for building things
                  that people love. I have a background in with mobile app and
                  web development with a focus on Flutter and React. I'm
                  currently working at{" "}
                  <a
                    href="https://www.paycom.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: styles.linkColor }}
                  >
                    Paycom
                  </a>{" "}
                  as a full-stack and mobile developer intern. My experiences
                  ranges from building small apps to collaborating on large
                  enterprise applications.
                </>
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          {/* Bio */}
          <Paragraph
            isBio={true}
            sectionTitle="Bio"
            sectionContent={
              <>
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
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={6}>
            {/* Projects */}
            <Paragraph
              sectionTitle="Projects"
              sectionContent={
                <>
                  All of my projects are open source and can be found on my{" "}
                  <a
                    href="https://github.com/aking618"
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
                  <br />
                </>
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={6}>
            {/* Resume */}
            <Paragraph
              sectionTitle="Resume"
              sectionContent={
                <>
                  My resume can be found on the{" "}
                  <Link to="/resume" style={{ color: styles.linkColor }}>
                    Resume
                  </Link>{" "}
                  page.
                </>
              }
            />
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
          {/* Icon Groups */}
          <Grid item xs={12} sm={6}>
            <DescriptiveIcon
              icon={<CodeOutlined />}
              content="Full Stack Developer"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DescriptiveIcon icon={<MapOutlined />} content="Stillwater, OK" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DescriptiveIcon
              icon={<EmailOutlined />}
              content={
                <>
                  Email:{" "}
                  <a
                    style={{ color: styles.linkColor }}
                    href="mailto:aking.college@gmail.com"
                  >
                    aking.college@gmail.com
                  </a>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DescriptiveIcon
              icon={<GitHub />}
              content={
                <>
                  GitHub:{" "}
                  <a
                    href="https://github.com/aking618"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: styles.linkColor }}
                  >
                    Aking618
                  </a>
                </>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default Home;
