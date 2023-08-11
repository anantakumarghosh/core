// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeAppDiv } from "@wrappid/styled-components";
import { useSelector } from "react-redux";

export default function CoreAppDiv(props) {
  let uid = useSelector((state) => state?.auth?.uid);

  return <NativeAppDiv {...props} uid={uid} />;
}
