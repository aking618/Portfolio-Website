import TopBar from "./components/lib/TopBar";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import React, { useState } from "react";
import CustomDrawer from "./components/lib/CustomDrawer";
import Projects from "./components/pages/Projects";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Footer from "./components/lib/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

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

      <Router>
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
      </Router>
    </ThemeProvider>
  );
};

export default App;
