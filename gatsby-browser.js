import React from "react";
import { Layout } from "./src/components/shared";
import "tailwindcss/dist/base.css";
import { init } from "emailjs-com";

init("user_c81DLhnBSYjLRFIR76p0Z");

export function wrapPageElement({ element, props }) {
  return <Layout props={props}>{element}</Layout>;
}
