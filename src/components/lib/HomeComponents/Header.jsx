import React from "react";
import { Typography } from "@material-ui/core";
import CustomAvatar from "./CustomAvatar";
import Fade from "../../../react-reveal/src/in-and-out/Fade";

const Header = (props) => {
  const { title, subtitle, avatarUrl } = props;

  return (
    <Fade bottom>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2" style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" component="h2">
          {subtitle}
        </Typography>
        <CustomAvatar image={avatarUrl} />
      </div>
    </Fade>
  );
};

export default Header;
