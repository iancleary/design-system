/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright Ian Cleary
 */

import * as stylex from "@stylexjs/stylex";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  success: "hsl(140, 85%, 25%)",
  successAccent: {
    default: "hsl(140, 85%, 15%)",
    [DARK]: "hsl(140, 85%, 35%)",
  },

  danger: "hsl(347, 88%, 42%)",
  dangerAccent: { default: "hsl(347, 88%, 32%)", [DARK]: "hsl(347, 88%, 52%)" },

  // Primary
  // These are the splashes of color that should
  // appear the most in your UI, and are the ones that determine the
  // overall "look" of the site. Use these for things like primary actions,
  // links, navigation items, icons, accent borders, or text you want to emphasize.
  primary50: { default: "hsl(152 68%, 96%)", [DARK]: "hsl(170, 97%, 15%)" },
  primary100: { default: "hsl(154, 75%, 87%)", [DARK]: "hsl(168, 80%, 23%)" },
  primary200: { default: "hsl(156, 73%, 74%)", [DARK]: "hsl(166, 72%, 28%)" },
  primary300: { default: "hsl(158, 58%, 62%)", [DARK]: "hsl(164, 71%, 34%)" },
  primary400: { default: "hsl(160, 51%, 49%)", [DARK]: "hsl(162, 63%, 41%)" },
  primary500: { default: "hsl(162, 63%, 41%)", [DARK]: "hsl(160, 51%, 49%)" },
  primary600: { default: "hsl(164, 71%, 34%)", [DARK]: "hsl(158, 58%, 62%)" },
  primary700: { default: "hsl(166, 72%, 28%)", [DARK]: "hsl(156, 73%, 74%)" },
  primary800: { default: "hsl(168, 80%, 23%)", [DARK]: "hsl(154, 75%, 87%)" },
  primary900: { default: "hsl(170, 97%, 15%)", [DARK]: "hsl(152 68%, 96%)" },

  // Neutral
  // These are the colors you will use the most and will make up the majority
  // of your UI. Use them for most of your text, backgrounds, and borders,
  // as well as for things like secondary buttons and links
  neutral50: { default: "hsl(210, 36%, 86%)", [DARK]: "hsl(210, 61%, 6%)" },
  neutral100: { default: "hsl(212, 33%, 79%)", [DARK]: "hsl(211, 39%, 13%)" },
  neutral200: { default: "hsl(210, 31%, 70%)", [DARK]: "hsl(209, 34%, 20%)" },
  neutral300: { default: "hsl(211, 27%, 60%)", [DARK]: "hsl(209, 28%, 29%)" },
  neutral400: { default: "hsl(209, 23%, 50%)", [DARK]: "hsl(210, 22%, 39%)" },
  neutral500: { default: "hsl(210, 22%, 39%)", [DARK]: "hsl(209, 23%, 50%)" },
  neutral600: { default: "hsl(209, 28%, 29%)", [DARK]: "hsl(211, 27%, 60%)" },
  neutral700: { default: "hsl(209, 34%, 20%)", [DARK]: "hsl(210, 31%, 70%)" },
  neutral800: { default: "hsl(211, 39%, 13%)", [DARK]: "hsl(212, 33%, 79%)" },
  neutral900: { default: "hsl(209, 61%, 6%)", [DARK]: "hsl(210, 36%, 86%)" },

  // Supporting
  // These colors should be used fairly conservatively throughout your UI to
  // avoid overpowering your primary colors. Use them when you need an
  // element to stand out, or to reinforce things like error states or positive
  // trends with the appropriate semantic color.
  supportingBlue50: {
    default: "hsl(205, 79%, 92%)",
    [DARK]: "hsl(205, 100%, 21%)",
  },
  supportingBlue100: {
    default: "hsl(205, 97%, 85%)",
    [DARK]: "hsl(205, 87%, 29%)",
  },
  supportingBlue200: {
    default: "hsl(205, 84%, 74%)",
    [DARK]: "hsl(205, 82%, 33%)",
  },
  supportingBlue300: {
    default: "hsl(205, 74%, 65%)",
    [DARK]: "hsl(205, 76%, 39%)",
  },
  supportingBlue400: {
    default: "hsl(205, 65%, 55%)",
    [DARK]: "hsl(205, 67%, 45%)",
  },
  supportingBlue500: {
    default: "hsl(205, 67%, 45%)",
    [DARK]: "hsl(205, 65%, 55%)",
  },
  supportingBlue600: {
    default: "hsl(205, 76%, 39%)",
    [DARK]: "hsl(205, 74%, 65%)",
  },
  supportingBlue700: {
    default: "hsl(205, 82%, 33%)",
    [DARK]: "hsl(205, 84%, 74%)",
  },
  supportingBlue800: {
    default: "hsl(205, 87%, 29%)",
    [DARK]: "hsl(205, 97%, 85%)",
  },
  supportingBlue900: {
    default: "hsl(205, 100%, 21%)",
    [DARK]: "hsl(205, 79%, 92%)",
  },

  // Supporting
  // These colors should be used fairly conservatively throughout your UI to
  // avoid overpowering your primary colors. Use them when you need an
  // element to stand out, or to reinforce things like error states or positive
  // trends with the appropriate semantic color.
  supportingPurple50: {
    default: "hsl(262, 61%, 93%)",
    [DARK]: "hsl(263, 85%, 18%)",
  },
  supportingPurple100: {
    default: "hsl(261, 68%, 84%)",
    [DARK]: "hsl(262, 72%, 25%)",
  },
  supportingPurple200: {
    default: "hsl(261, 54%, 68%)",
    [DARK]: "hsl(262, 69%, 31%)",
  },
  supportingPurple300: {
    default: "hsl(261, 47%, 58%)",
    [DARK]: "hsl(262, 60%, 38%)",
  },
  supportingPurple400: {
    default: "hsl(262, 43%, 51%)",
    [DARK]: "hsl(262, 48%, 46%)",
  },
  supportingPurple500: {
    default: "hsl(262, 48%, 46%)",
    [DARK]: "hsl(262, 43%, 51%)",
  },
  supportingPurple600: {
    default: "hsl(262, 60%, 38%)",
    [DARK]: "hsl(261, 47%, 58%)",
  },
  supportingPurple700: {
    default: "hsl(262, 69%, 31%)",
    [DARK]: "hsl(261, 54%, 68%)",
  },
  supportingPurple800: {
    default: "hsl(262, 72%, 25%)",
    [DARK]: "hsl(261, 68%, 84%)",
  },
  supportingPurple900: {
    default: "hsl(263, 85%, 18%)",
    [DARK]: "hsl(262, 61%, 93%)",
  },

  // Supporting
  // These colors should be used fairly conservatively throughout your UI to
  // avoid overpowering your primary colors. Use them when you need an
  // element to stand out, or to reinforce things like error states or positive
  // trends with the appropriate semantic color.
  supportingRed50: {
    default: "hsl(360, 100%, 97%)",
    [DARK]: "hsl(360, 92%, 20%)",
  },
  supportingRed100: {
    default: "hsl(360, 82%, 89%)",
    [DARK]: "hsl(360, 85%, 25%)",
  },
  supportingRed200: {
    default: "hsl(360, 77%, 78%)",
    [DARK]: "hsl(360, 79%, 32%)",
  },
  supportingRed300: {
    default: "hsl(360, 71%, 66%)",
    [DARK]: "hsl(360, 72%, 38%)",
  },
  supportingRed400: {
    default: "hsl(360, 64%, 55%)",
    [DARK]: "hsl(360, 67%, 44%)",
  },
  supportingRed500: {
    default: "hsl(360, 67%, 44%)",
    [DARK]: "hsl(360, 64%, 55%)",
  },
  supportingRed600: {
    default: "hsl(360, 72%, 38%)",
    [DARK]: "hsl(360, 71%, 66%)",
  },
  supportingRed700: {
    default: "hsl(360, 79%, 32%)",
    [DARK]: "hsl(360, 77%, 78%)",
  },
  supportingRed800: {
    default: "hsl(360, 85%, 25%)",
    [DARK]: "hsl(360, 82%, 89%)",
  },
  supportingRed900: {
    default: "hsl(360, 92%, 20%)",
    [DARK]: "hsl(360, 100%, 97%)",
  },

  // Supporting
  // These colors should be used fairly conservatively throughout your UI to
  // avoid overpowering your primary colors. Use them when you need an
  // element to stand out, or to reinforce things like error states or positive
  // trends with the appropriate semantic color.
  supportingYellow50: {
    default: "hsl(45, 100%, 96%)",
    [DARK]: "hsl(43, 86%, 17%)",
  },
  supportingYellow100: {
    default: "hsl(45, 90%, 88%)",
    [DARK]: "hsl(43, 77%, 27%)",
  },
  supportingYellow200: {
    default: "hsl(45, 86%, 81%)",
    [DARK]: "hsl(43, 72%, 37%)",
  },
  supportingYellow300: {
    default: "hsl(43, 90%, 76%)",
    [DARK]: "hsl(42, 63%, 48%)",
  },
  supportingYellow400: {
    default: "hsl(43, 89%, 70%)",
    [DARK]: "hsl(42, 78%, 60%)",
  },
  supportingYellow500: {
    default: "hsl(42, 78%, 60%)",
    [DARK]: "hsl(43, 89%, 70%)",
  },
  supportingYellow600: {
    default: "hsl(42, 63%, 48%)",
    [DARK]: "hsl(43, 90%, 76%)",
  },
  supportingYellow700: {
    default: "hsl(43, 72%, 37%)",
    [DARK]: "hsl(45, 86%, 81%)",
  },
  supportingYellow800: {
    default: "hsl(43, 77%, 27%)",
    [DARK]: "hsl(45, 90%, 88%)",
  },
  supportingYellow900: {
    default: "hsl(43, 86%, 17%)",
    [DARK]: "hsl(45, 100%, 96%)",
  },
});

export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});

export const size = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});

export const line = stylex.defineVars({
  xsmall: 0.5,
  small: 0.75,
  medium: 1.0,
  large: 1.5,
  xlarge: 2.0,
  xxlarge: 2.5,
  xxxlarge: 3.0,
});

export const display = stylex.create({
  inlineFlex: {
    display: "inline-flex",
  },
  flex: {
    display: "flex",
  },
  block: {
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
  },
  grid: {
    display: "grid",
  },
});

export const columnGap = stylex.create({
  xsmall: {
    columnGap: size.xsmall,
  },
  small: {
    columnGap: size.small,
  },
  medium: {
    columnGap: size.medium,
  },
  large: {
    columnGap: size.large,
  },
  xlarge: {
    columnGap: size.xlarge,
  },
  xxlarge: {
    columnGap: size.xxlarge,
  },
  xxxlarge: {
    columnGap: size.xxxlarge,
  },
});

export const rowGap = stylex.create({
  small: {
    rowGap: size.small,
  },
  medium: {
    rowGap: size.medium,
  },
  large: {
    rowGap: size.large,
  },
  xlarge: {
    rowGap: size.xlarge,
  },
  xxlarge: {
    rowGap: size.xxlarge,
  },
  xxxlarge: {
    rowGap: size.xxxlarge,
  },
});

export const inlineFlex = stylex.create({
  columnGapSmall: {
    display: "inline-flex",
    columnGap: size.small,
  },
  columnGapMedium: {
    display: "inline-flex",
    columnGap: size.medium,
  },
  columnGapLarge: {
    display: "inline-flex",
    columnGap: size.large,
  },
  columnGapXLarge: {
    display: "inline-flex",
    columnGap: size.xlarge,
  },
  columnGapXXLarge: {
    display: "inline-flex",
    columnGap: size.xxlarge,
  },
  columnGapXXXLarge: {
    display: "inline-flex",
    columnGap: size.xxxlarge,
  },
});

export const grid = stylex.create({
  rowGapSmall: {
    display: "grid",
    rowGap: size.small,
  },
  rowGapMedium: {
    display: "grid",
    rowGap: size.medium,
  },
  rowGapLarge: {
    display: "grid",
    rowGap: size.large,
  },
  rowGapXLarge: {
    display: "grid",
    rowGap: size.xlarge,
  },
  rowGapXXLarge: {
    display: "grid",
    rowGap: size.xxlarge,
  },
  rowGapXXXLarge: {
    display: "grid",
    rowGap: size.xxxlarge,
  },
});

export const padding = stylex.create({
  small: {
    padding: size.small,
  },
  medium: {
    padding: size.medium,
  },
  large: {
    padding: size.large,
  },
  xlarge: {
    padding: size.xlarge,
  },
  xxlarge: {
    padding: size.xxlarge,
  },
  xxxlarge: {
    padding: size.xxxlarge,
  },
});

export const paddingLeft = stylex.create({
  small: {
    paddingLeft: size.small,
  },
  medium: {
    paddingLeft: size.medium,
  },
  large: {
    paddingLeft: size.large,
  },
  xlarge: {
    paddingLeft: size.xlarge,
  },
  xxlarge: {
    paddingLeft: size.xxlarge,
  },
  xxxlarge: {
    paddingLeft: size.xxxlarge,
  },
});

export const paddingRight = stylex.create({
  small: {
    paddingRight: size.small,
  },
  medium: {
    paddingRight: size.medium,
  },
  large: {
    paddingRight: size.large,
  },
  xlarge: {
    paddingRight: size.xlarge,
  },
  xxlarge: {
    paddingRight: size.xxlarge,
  },
  xxxlarge: {
    paddingRight: size.xxxlarge,
  },
});

export const paddingTop = stylex.create({
  small: {
    paddingTop: size.small,
  },
  medium: {
    paddingTop: size.medium,
  },
  large: {
    paddingTop: size.large,
  },
  xlarge: {
    paddingTop: size.xlarge,
  },
  xxlarge: {
    paddingTop: size.xxlarge,
  },
  xxxlarge: {
    paddingTop: size.xxxlarge,
  },
});

export const paddingBottom = stylex.create({
  small: {
    paddingBottom: size.small,
  },
  medium: {
    paddingBottom: size.medium,
  },
  large: {
    paddingBottom: size.large,
  },
  xlarge: {
    paddingBottom: size.xlarge,
  },
  xxlarge: {
    paddingBottom: size.xxlarge,
  },
  xxxlarge: {
    paddingBottom: size.xxxlarge,
  },
});

export const margin = stylex.create({
  small: {
    margin: size.small,
  },
  medium: {
    margin: size.medium,
  },
  large: {
    margin: size.large,
  },
  xlarge: {
    margin: size.large,
  },
  xxlarge: {
    margin: size.large,
  },
  xxxlarge: {
    margin: size.large,
  },
});

export const marginLeft = stylex.create({
  small: {
    marginLeft: size.small,
  },
  medium: {
    marginLeft: size.medium,
  },
  large: {
    marginLeft: size.large,
  },
  xlarge: {
    marginLeft: size.large,
  },
  xxlarge: {
    marginLeft: size.large,
  },
  xxxlarge: {
    marginLeft: size.large,
  },
});

export const marginRight = stylex.create({
  small: {
    marginRight: size.small,
  },
  medium: {
    marginRight: size.medium,
  },
  large: {
    marginRight: size.large,
  },
  xlarge: {
    marginRight: size.large,
  },
  xxlarge: {
    marginRight: size.large,
  },
  xxxlarge: {
    marginRight: size.large,
  },
});

export const marginTop = stylex.create({
  small: {
    marginTop: size.small,
  },
  medium: {
    marginTop: size.medium,
  },
  large: {
    marginTop: size.large,
  },
  xlarge: {
    marginTop: size.large,
  },
  xxlarge: {
    marginTop: size.large,
  },
  xxxlarge: {
    marginTop: size.large,
  },
});

export const marginBottom = stylex.create({
  small: {
    marginBottom: size.small,
  },
  medium: {
    marginBottom: size.medium,
  },
  large: {
    marginBottom: size.large,
  },
  xlarge: {
    marginBottom: size.large,
  },
  xxlarge: {
    marginBottom: size.large,
  },
  xxxlarge: {
    marginBottom: size.large,
  },
});
