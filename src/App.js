import TopBar from "./components/lib/TopBar";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import React, { useState } from "react";
import CustomDrawer from "./components/lib/CustomDrawer";
import Projects from "./components/pages/Projects";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Footer from "./components/lib/Footer";
import Fade from "./react-reveal/src/in-and-out/Fade";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light" | "dark" | undefined>(
    window.matchMedia && window.matchMedia('(perfers-color-scheme: dark)').matches ? "dark" : "light")
  )
  const [isTest, setIsTest] = useState(true);

  const styles = {
    footerPadding: 20,
    linkColor: theme === "light" ? "#1a1a1a" : "#f5f5f5",
  };

  // dark theme
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      background: {
        default: "#202023",
      },
      primary: {
        main: "#2c2c2f",
      },
      secondary: {
        main: "#f5f5f5",
      },
    },
    typography: {
      fontFamily: "M PLUS Rounded",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@global": {
            body: {
              transition: "all 0.3s linear",
            },
          },
        },
      },
    },
  });

  // light theme
  const lightTheme = createTheme({
    palette: {
      type: "light",
      background: {
        default: "#f5f5f5",
      },
      primary: {
        main: "#e0e0e0",
      },
      secondary: {
        main: "#1a1a1a",
      },
    },
    typography: {
      fontFamily: "M PLUS Rounded",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@global": {
            body: {
              transition: "all 0.3s linear",
            },
          },
        },
      },
    },
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />

      {!isTest ? (
        <HashRouter>
          <div
            style={{
              minHeight: "100vh",
              position: "relative",
            }}
          >
            <TopBar toggleMenu={toggleMenu} setTheme={setTheme} theme={theme} />
            <Switch>
              <Route exact path="/" render={() => <Home styles={styles} />} />
              <Route
                exact
                path="/projects"
                render={() => <Projects styles={styles} />}
              />
              <Route
                exact
                path="/resume"
                render={() => <Resume styles={styles} />}
              />
              <Route
                exact
                path="/contact"
                render={() => <Contact styles={styles} />}
              />
              <Route path="*" render={() => <Home styles={styles} />} />
            </Switch>
            <CustomDrawer
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              linkColor={styles.linkColor}
            />
            <Footer />
          </div>
        </HashRouter>
      ) : (
        <div
          style={{
            minHeight: "100vh",
            position: "relative",
          }}
        >
           <TopBar toggleMenu={toggleMenu} setTheme={setTheme} theme={theme} />
          <Home styles={styles} />
          <Fade bottom>
            <Projects styles={styles} />
          </Fade>
          <Fade bottom>
            <Resume styles={styles} />
          </Fade>
          <Fade bottom>
            <Contact styles={styles} />
          </Fade>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
