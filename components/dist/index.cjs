var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// components/src/index.js
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  buttonStyle: () => buttonStyle
});
module.exports = __toCommonJS(src_exports);

// components/src/ui/button/Button.jsx
var import_react = require("@remix-run/react");
var import_clsx = __toESM(require("clsx"), 1);
var sizeStyles = {
  sm: "h-8 px-3 text-mono-sm svg:w-4",
  icon: "h-8 w-8 text-mono-sm svg:w-4",
  base: "h-10 px-4 text-mono-sm svg:w-5"
};
var buttonStyle = ({ size = "base", variant = "primary" }) => {
  return (0, import_clsx.default)(
    "inline-flex items-center justify-center rounded align-top elevation-1 disabled:cursor-not-allowed",
    sizeStyles[size],
    sizeStyles[size]
  );
};
function Button({
  className,
  size = "base",
  variant = "primary",
  ...props
}) {
  return typeof props.to === "undefined" ? /* @__PURE__ */ React.createElement("button", { className: (0, import_clsx.default)(className, buttonStyle({ size })), ...props }) : /* @__PURE__ */ React.createElement(import_react.Link, { className: (0, import_clsx.default)(className, buttonStyle({ size })), ...props });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  buttonStyle
});
//# sourceMappingURL=index.cjs.map