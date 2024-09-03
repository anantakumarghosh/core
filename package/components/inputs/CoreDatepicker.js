// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDatepicker } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreDatePicker(props) {
  const { error, helperText } = props;

  return (
    <CoreBox>
      <NativeDatepicker {...props} />

      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
    </CoreBox>
  );
}
CoreDatePicker.validProps = [
  {
    description: "The currently selected date.",
    name       : "value",
    types      : [{ type: "string" }],
  },
  {
    description:
      "The format of the date in the UI. The value for the bindings will always be in the YYYY-MM-DD format. Leave empty to let the end-user locale define the format.",
    name : "format",
    types: [{ type: "string" }],
  },
  {
    description: "A default value for the date picker.",
    name       : "defaultValue",
    types      : [{ type: "string" }],
  },
  {
    description: "A label that describes the content of the date picker. e.g. \"Arrival date\".",
    name       : "label",
    types      : [{ type: "string" }],
  },
  {
    description: "Name of this input. Used as a reference in form data.",
    name       : "name",
    types      : [{ type: "string" }],
  },
  {
    description:
      "One of the available MUI TextField variants. Possible values are outlined, filled or standard",
    name : "variant",
    types: [{ default: "outlined", type: "string" }],
  },
  {
    description: "The size of the component. One of small, or medium.",
    name       : "size",
    types      : [{ default: "small", type: "string" }],
  },
  {
    description:
      "Whether the button should occupy all available horizontal space.",
    name : "fullWidth",
    types: [{ type: "boolean" }],
  },
  {
    description: "The date picker is disabled.",
    name       : "disabled",
    types      : [{ type: "boolean" }],
  },
  {
    description: "Whether the input is required to have a value.",
    name       : "isRequired",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Whether the input value is invalid.",
    name       : "isInvalid",
    types      : [{ default: false, type: "boolean" }],
  },
];
CoreDatePicker.invalidProps = [];
