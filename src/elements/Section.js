import React from "react";
import PropTypes from "prop-types";

function Section(props) {
  const className = ["section"];
  className.push(props.className);
  if (props.isCenteredContent) className.push("center-content");

  return <section className={className.join(" ")}>{props.children}</section>;
}

Section.propTypes = {
  isCenteredContent: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Section;
