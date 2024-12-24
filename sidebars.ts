// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      label: "Overview",
      id: "overview", // Directly link to the single Overview markdown file
    },
  ],
};

export default sidebars;
