// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableHeadRow } from "@wrappid/native";

export default function CoreTableHeadRow(props) {
  return <NativeTableHeadRow {...props}>{props.children}</NativeTableHeadRow>;
}
