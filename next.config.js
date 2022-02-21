require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  swcMinify: true,
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
