/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright Ian Cleary
 */

import React from "react";
import { Link } from "@remix-run/react";

import * as stylex from "@stylexjs/stylex";
import { size, colors } from "../../../styles/tokens.stylex";

const styles = stylex.create({
  common: {
    width: "fit-content",
    display: "inline-flex",
    alignItems: "center",
    justifyItems: "center",
    border: "none",
    borderRadius: size.small,
    outline: "none",
  },
  button: {},
  link: {
    textDecoration: "none",
  },
  primary: {
    backgroundColor: {
      default: colors.neutral500,
      ":hover": colors.neutral600,
    },
  },
  success: {
    backgroundColor: {
      default: colors.success,
      ":hover": colors.successAccent,
    },
  },
  danger: {
    backgroundColor: {
      default: "red",
      ":hover": "#EF0107",
    },
  },
  sm: {
    height: size.small,
    paddingInline: size.small,
  },
  icon: {
    height: size.medium,
    width: size.medium,
  },
  base: {
    height: size.xlarge,
    paddingInline: size.large,
  },
});



interface Props {
  to?: string;
  variant?: string;
  size?: string;
  type?: "submit" | "reset" | "button" | undefined;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  to,
  variant = "primary",
  size = "base",
  type = "button",
  children,
}) => {
  return typeof to === "undefined" ? (
    <button
      type={type}
      {...stylex.props(
        styles.common,
        styles.button,
        variant === "primary" && styles.primary,
        variant === "success" && styles.success,
        variant === "danger" && styles.danger,
        size === "sm" && styles.sm,
        size === "icon" && styles.icon,
        size === "base" && styles.base,
      )}
    >
      {children}
    </button>
  ) : (
    <Link
      to={to}
      type={type}
      {...stylex.props(
        styles.common,
        styles.link,
        variant === "primary" && styles.primary,
        variant === "success" && styles.success,
        variant === "danger" && styles.danger,
        size === "sm" && styles.sm,
        size === "icon" && styles.icon,
        size === "base" && styles.base,
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
