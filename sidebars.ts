// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      label: "Overview",
      id: "overview",
    },
    {
      type: "doc",
      label: "Stellar",
      id: "stellar",
    },
    {
      type: "doc",
      label: "Risc Zero WASM Verifier",
      id: "verifier",
    },
  ],
};

export default sidebars;
