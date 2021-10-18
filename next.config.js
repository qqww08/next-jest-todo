require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const localeSubpaths = {
  zh: "zh",
  ko: "ko",
};
const nextConfig = {
  // url rewrite
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${process.env.BASE_URL}/:path*`,
  //     },
  //   ];
  // },
  compress: true,
  publicRuntimeConfig: {
    localeSubpaths,
  },
  webpack: (config, options) => {
    return config;
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
