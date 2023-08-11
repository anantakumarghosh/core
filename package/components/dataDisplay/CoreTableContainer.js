// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeTableContainer } from "@wrappid/styled-components";

export default function CoreTableContainer(props) {
  return <NativeTableContainer {...props}>{props.children}</NativeTableContainer>;
}
