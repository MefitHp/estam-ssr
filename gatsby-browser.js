import React from "react";
import { Layout } from "./src/components/shared";
import "tailwindcss/dist/base.css";
import { init } from "emailjs-com";
init(process.env.EMAILJS_USERID);

export function wrapPageElement({ element, props }) {
  return <Layout props={props}>{element}</Layout>;
}
