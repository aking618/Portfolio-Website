import { IconButton, Typography, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import React from "react";

const TopBar = (props) => {
  const { toggleMenu, setTheme, theme } = props;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <div
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
            textAlign: "center",
            cursor: "pointer",
          }}
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="h6" color="textPrimary">
            Ayren King
          </Typography>
        </div>
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
            // elevated button with rounded corners
            borderRadius: "10%",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
            height: "2rem",
            width: "2rem",
            padding: "0.5rem",
            marginLeft: "1rem",
            border: theme === "dark" ? "1px solid #fff" : "1px solid #000",
          }}
        >
          <img
            src={
              theme === "dark"
                ? "/assets/light-mode.png"
                : "/assets/dark-mode.png"
            }
            alt={theme === "light" ? "Light Mode" : "Dark Mode"}
            style={{
              width: "1.5rem",
              height: "1.5rem",
              cursor: "pointer",
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
