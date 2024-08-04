/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "intro",
    "installation",
    "quickstart",
    {
      type: "category",
      label: "Python SDK",
      items: [
        "python-sdk/setup",
        "python-sdk/basic-usage",
        "python-sdk/advanced-usage",
      ],
    },
    {
      type: "category",
      label: "API Endpoint",
      items: ["api-endpoint/setup"],
    },
    {
      type: "category",
      label: "Features",
      items: [
        "features/natural-language-to-sql",
        "features/advanced-features",
        "features/semantic-layer-optimization",
        // "features/multi-database-support",
        "features/multi-tenant-support",
      ],
    },
    {
      type: "category",
      label: "Deployment",
      items: ["deployment/aws-lambda"],
    },
    "troubleshooting",
  ],
};

export default sidebars;
