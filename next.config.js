require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  swcMinify: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config) {
    return config;
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
