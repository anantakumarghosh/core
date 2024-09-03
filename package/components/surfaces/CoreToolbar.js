// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeToolbar } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreToolBar(props) {
  props = sanitizeComponentProps(CoreToolBar, props);
  return <NativeToolbar {...props} />;
}
CoreToolBar.validProps = [
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "If true, disables gutter padding.",
    name       : "disableGutters",
    types      : [{ default: false, type: "boolean" }],
  },
 
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        default    : "regular'",
        type       : "string",
        validValues: ["dense", "regular"],
      },
    ],
  },
];
CoreToolBar.invalidProps = [];
