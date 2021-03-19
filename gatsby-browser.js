import React from "react";
import Layout from "./src/components/Layout";
import "tailwindcss/dist/base.css";

export function wrapPageElement({ element, props }) {
  return <Layout props={props}>{element}</Layout>;
}
