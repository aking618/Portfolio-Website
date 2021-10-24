import React from "react";
import { SwipeableDrawer, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const CustomDrawer = (props) => {
  const { isOpen, toggleMenu, linkColor } = props;

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={toggleMenu}
      onOpen={toggleMenu}
      variant="temporary"
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={item.link}
          >
            <Typography
              variant="h6"
              style={{
                color: linkColor,
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {item.name}
            </Typography>
          </Link>
        </div>
      ))}
    </SwipeableDrawer>
  );
};

export default CustomDrawer;
