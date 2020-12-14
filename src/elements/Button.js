import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const className = ["button"];

  if (props.isPrimary) className.push("button-primary");
  if (props.isWideMobile) className.push("button-wide-mobile");
  if (props.isSmall) className.push("button-sm");

  return <button className={className.join(" ")}>{props.children}</button>;
}
Button.propTypes = {
  isPrimary: PropTypes.bool,
  isWideMobile: PropTypes.bool,
  isSmall: PropTypes.bool,
  children: PropTypes.string,
};
