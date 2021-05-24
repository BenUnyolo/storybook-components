import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import ButtonArrow from "../assets/button/arrowSVG";

export const Button = ({ type, label, disabled, arrow, ...props }) => {
  return (
    <button
      type="button"
      className={`button button--${type}`}
      disabled={disabled}
      {...props}
    >
      {/* ternary operator for  */}
      {arrow ? <ButtonArrow /> : ""}
      {label}
    </button>
  );
};

Button.propTypes = {
  // type of button (primary, secondary etc.)
  type: PropTypes.oneOf(["primary", "secondary"]),
  // button text
  label: PropTypes.string.isRequired,
  // disabled property
  disabled: PropTypes.bool,
  // sets whether to have arrow or not
  arrow: PropTypes.bool,
  // optional click handler
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  disabled: false,
  arrow: false,
  onClick: undefined,
};
