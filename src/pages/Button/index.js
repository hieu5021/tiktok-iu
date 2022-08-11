import React, { Children } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary,
  outline,
  children,
  onClick,
  small,
  large,
  text,
  disabled,
  rounded,
  ...passProps
}) {
  let Comp = "button";
  const props = { onClick, passProps };
  if (to) {
    props.to = to;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      console.log(key);
    });
  }
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
