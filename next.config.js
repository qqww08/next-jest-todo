require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  webpack(config) {
    return config;
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
