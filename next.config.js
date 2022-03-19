const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
