/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright Ian Cleary
 */

import { Link } from "@remix-run/react";
import clsx from "clsx";

const sizeStyles = {
  sm: "h-8 px-3 text-mono-sm svg:w-4",
  icon: "h-8 w-8 text-mono-sm svg:w-4",
  base: "h-10 px-4 text-mono-sm svg:w-5",
};

export const buttonStyle = ({ size = "base", variant = "primary" }) => {
  return clsx(
    "inline-flex items-center justify-center rounded align-top elevation-1 disabled:cursor-not-allowed",
    sizeStyles[size],
    sizeStyles[size],
  );
};

export function Button({
  className,
  size = "base",
  variant = "primary",
  ...props
}) {
  return typeof props.to === "undefined" ? (
    <button className={clsx(className, buttonStyle({ size }))} {...props} />
  ) : (
    <Link className={clsx(className, buttonStyle({ size }))} {...props} />
  );
}
