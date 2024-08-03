// src/components/Navbar.js

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useThemeConfig } from "@docusaurus/theme-common";

export default function Navbar() {
  const { siteConfig } = useDocusaurusContext();
  const { navbar } = useThemeConfig();

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__items">
          <Link to="/" className="navbar__brand">
            <img
              src={navbar.logo.src}
              alt={navbar.logo.alt}
              className="navbar__logo"
            />
            <b className="navbar__title">{siteConfig.title}</b>
          </Link>
          <Link to="/docs/intro" className="navbar__item">
            Docs
          </Link>
          <Link to="/blog" className="navbar__item">
            Blog
          </Link>
        </div>
        <div className="navbar__items navbar__items--right">
          <Link
            to="https://github.com/your-github-org/data-neuron"
            className="navbar__item"
          >
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}
