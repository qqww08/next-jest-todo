const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // webpack5 enable
  future: {
    webpack5: true,
  },
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
