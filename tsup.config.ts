/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright Ian Cleary
 */

import { defineConfig } from "tsup";

export default defineConfig({
  publicDir: "components/src/assets/",
  entry: ["components/src/index.js"],
  outDir: "components/dist",
  external: ["react/jsx-runtime", "clsx", "@remix-run/react"],
  splitting: false,
  sourcemap: true,
  clean: true,
});
