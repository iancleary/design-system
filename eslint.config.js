import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.js", "**/*.ts", "**/*.tsx"],
  },
];
