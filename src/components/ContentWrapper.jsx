import React from "react";

const ContentWrapper = ({ children, styles }) => {
  const contentStyle = {
    paddingTop: 100,
    paddingRight: 20,
    paddingBottom: styles.footerPadding,
    paddingLeft: 20,
  };

  return <div style={contentStyle}>{children}</div>;
};

export default ContentWrapper;
