// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
// docusaurus.config.js

const config = {
  title: "Data Neuron",
  tagline: "Chat with Your Data, Effortlessly",
  url: "https://www.dataneuron.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "databrainhq",
  projectName: "dataneuron-docs",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/databrainhq/dataneuron-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/databrainhq/dataneuron-docs/tree/main/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/global.css"), // Add this line
          ],
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "Data Neuron Logo",
        src: "img/dataneuron.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/databrainhq/dataneuron",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Installation",
              to: "/docs/installation",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/data-neuron",
            },
            {
              label: "Discord",
              href: "https://discord.gg/wmZ89BhDFa",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/databrainhq/dataneuron",
            },
            {
              label: "Databrain Labs",
              href: "https://www.usedatabrain.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DataBrain Labs, Inc`,
    },
  },
};

module.exports = config;
