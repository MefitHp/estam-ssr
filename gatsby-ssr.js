import React from "react";
import { Layout } from "./src/components/shared";

export function wrapPageElement({ element, props }) {
  return <Layout props={props}>{element}</Layout>;
}
