import React from "react";
import PropTypes from "prop-types";

function CtaComponent({ ...anchorProps }) {
  const { href, children } = anchorProps;

  return <a href={href}>{children}</a>;
}

export default CtaComponent;
