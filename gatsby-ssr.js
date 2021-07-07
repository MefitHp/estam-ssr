import React from "react";
import { Layout } from "./src/components/shared";
import { init } from "emailjs-com";
import { stripIndent } from "common-tags";

init("user_c81DLhnBSYjLRFIR76p0Z");

export function wrapPageElement({ element, props }) {
  return <Layout props={props}>{element}</Layout>;
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  const pluginOptions = {
    partnerId: "3170500",
    includeInDevelopment: true,
  };
  const { partnerId, includeInDevelopment = false } = pluginOptions;

  if (process.env.NODE_ENV === `production` || includeInDevelopment) {
    setPostBodyComponents([
      <React.Fragment key="gatsby-plugin-linkedin-insight">
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: stripIndent`
                _linkedin_partner_id = "${partnerId}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: stripIndent`
                (function () {
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript";
                    b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);
                })();`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: `none` }}
            alt=""
            src={`https://dc.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`}
          />
        </noscript>
      </React.Fragment>,
    ]);
  }
};
