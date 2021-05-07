const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  future: {
    webpack5: true,
  },
  compress: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    config.experiments = {};
    return config;
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
