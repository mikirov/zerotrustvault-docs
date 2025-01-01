// @ts-check
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Zero Trust Vault - The Future of Secure Blockchain Escrows",
  tagline: "Trustless. Decentralized. Secure.",
  url: "https://zerotrustvault.xyz", // Use the custom domain
  baseUrl: "/", // Base URL should be "/" since the subdomain itself serves the docs

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "zerotrustvault",
  projectName: "zerotrustvault-docs",

  trailingSlash: false,

  themeConfig: {
    metadata: [
      { name: 'og:title', content: 'Zero Trust Vault - The Future of Secure Blockchain Escrows' },
      { name: 'og:description', content: 'Zero Trust Vault revolutionizes escrows with zero-knowledge proofs and decentralized infrastructure.' },
      { name: 'og:url', content: 'https://zerotrustvault.xyz' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Zero Trust Vault' },
      { name: 'og:locale', content: 'en_US' },

      // Twitter meta tags are commented out as requested
      // { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:title', content: 'Zero Trust Vault - The Future of Secure Blockchain Escrows' },
      // { name: 'twitter:description', content: 'Revolutionize your escrow experience with Zero Trust Vault. Trustless. Secure. Decentralized.' }
    ],
    // announcementBar: {
    //   id: 'zk_blockchain_escrow',
    //   content: '🚀 Zero Trust Vault brings secure, trustless escrow solutions powered by zero-knowledge technology. Explore <a href="https://zerotrustvault.xyz" target="_blank" rel="noopener noreferrer">Zero Trust Vault</a> today!',
    //   backgroundColor: '#f3f4f6',
    //   textColor: '#091E42',
    //   isCloseable: true,
    // },
    // image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'manifest',
          href: 'img/site.webmanifest',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: 'img/favicon.ico',
        },
      },
    ],
    navbar: {
      title: "Zero Trust Vault",
      logo: {
        alt: "Zero Trust Vault Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: '/docs/overview',
          label: 'Overview',
          position: 'left',
        },
        {
          to: '/docs/stellar',
          label: 'Architecture',
          position: 'left',
        },
        {
          to: '/docs/verifier',
          label: 'Verifier',
          position: 'left',
        },
        {
          href: 'https://github.com/mikirov/zerotrustvault-docs',
          label: 'GitHub',
          position: 'right',
        },
        // Commented out for now as Twitter doesn't exist
        // {
        //   href: 'https://twitter.com/zerotrustvault',
        //   label: 'Twitter',
        //   position: 'right',
        // },
      ],
    },
    // algolia: {
    //   appId: 'D885CKOSDV',
    //   apiKey: '78086ec075001db895522e49c0176f29',
    //   indexName: 'zerotrustvault',
    //   contextualSearch: true,
    //   searchPagePath: 'search',
    // },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          includeCurrentVersion: true,
        },
        gtag: {
          trackingID: 'G-T153GPV90L',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-TFWH8JNT',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // plugins: [
  //   [
  //     'docusaurus-plugin-openapi-docs',
  //     {
  //       id: "api",
  //       docsPluginId: "classic",
  //       config: {
  //         api: {
  //           specPath: "swagger.json",
  //           outputDir: "docs/api",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             // categoryLinkSource: "tag",
  //           },
  //         },
  //         evmNode: {
  //           specPath: "rpc-swagger.json",
  //           outputDir: "docs/archive-node",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             // categoryLinkSource: "tag",
  //           },
  //         },
  //       }
  //     }
  //   ],
  //   // [
  //   //   '@docusaurus/plugin-pwa',
  //   //   {
  //   //     debug: false, // Set to true if you want to see debugging logs
  //   //     offlineModeActivationStrategies: [
  //   //       'appInstalled',
  //   //       'standalone',
  //   //       'queryString',
  //   //     ],
  //   //     pwaHead: [
  //   //       {
  //   //         tagName: 'link',
  //   //         rel: 'icon',
  //   //         href: '/img/docusaurus.png',
  //   //       },
  //   //       {
  //   //         tagName: 'link',
  //   //         rel: 'manifest',
  //   //         href: '/manifest.json', // your PWA manifest
  //   //       },
  //   //       {
  //   //         tagName: 'meta',
  //   //         name: 'theme-color',
  //   //         content: 'rgb(37, 194, 160)',
  //   //       },
  //   //     ],
  //   //   },
  //   // ],
  //   [
  //     '@docusaurus/plugin-client-redirects',
  //     {
  //       redirects: [
  //         {
  //           from: '/',
  //           to: '/docs/overview',
  //         },
  //         {
  //           from: '/docs',
  //           to: '/docs/overview',
  //         },
  //       ],
  //     },
  //   ],
  // ],

  themes: ["docusaurus-theme-openapi-docs"],

  deploymentBranch: 'gh-pages',
};

export default async function createConfig() {
  return config;
}
