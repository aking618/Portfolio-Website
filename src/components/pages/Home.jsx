import React from "react";
import ContentWrapper from "../lib/ContentWrapper";
import { Grid } from "@material-ui/core";
import BioEntry from "../lib/HomeComponents/BioEntry";
import Header from "../lib/HomeComponents/Header";
import Paragraph from "../lib/HomeComponents/Paragraph";
import Fade from "../../react-reveal/src/in-and-out/Fade";

const Home = (props) => {
  const { styles } = props;

  return (
    <ContentWrapper styles={styles}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* Header with name and avatar */}
          <Header
            title="Ayren King"
            subtitle="Flutter Fanatic | E-Sports Enthusiast"
            avatarUrl="/assets/avatar.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={3} />
        <Grid item xs={12} sm={6}>
          {/* About Me */}
          <Fade bottom>
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
          </Fade>
        </Grid>
        <Grid item xs={12} sm={3} />
        <Grid item xs={12} sm={3} />
        <Grid item xs={12}>
          {/* Bio */}
          <Fade bottom>
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
          </Fade>
        </Grid>
        <Grid item xs={12} sm={3} />
      </Grid>
    </ContentWrapper>
  );
};

export default Home;
