/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright Ian Cleary
 */

import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.js", "**/*.ts", "**/*.tsx"],
  },
];
