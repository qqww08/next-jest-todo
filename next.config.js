require("dotenv").config();

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    console.log(options.webpack.version);
    config.experiments = {};
    return config;
  },
  //*********************************//
};
// /* config options here */
// require("dotenv").config();
// const withBundleAnalyzer = require("npm i @next/bundle-analyzer");
// const withFonts = require("next-fonts");
// const CompressionPlugin = require("compression-webpack-plugin");
//
// module.exports = withBundleAnalyzer(
//     withFonts({
//       future: {
//         webpack5: true,
//       },
//       // //**  빌드 시 번들 사이즈 분석 플러그인**//
//       // distDir: ".next",
//       // analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
//       // analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
//       // bundleAnalyzerConfig: {
//       //   server: {
//       //     analyzerMode: "static",
//       //     reportFilename: "../../bundles/server.html",
//       //   },
//       //   browser: {
//       //     analyzerMode: "static",
//       //     reportFilename: "../bundles/client.html",
//       //   },
//       // },
//       // compress: true,
//
//       webpack: (config, options) => {
//         if (!options.dev) {
//           config.devtool = options.isServer ? false : "eval-source-map";
//         }
//         // const prod = process.env.NODE_ENV === "production";
//         // config.plugins = config.plugins || [];
//         // config.plugins.push(
//         //   new CompressionPlugin({
//         //     filename: "[path][base].gz",
//         //     algorithm: "gzip",
//         //     test: /\.js$|\.css$|\.html$/,
//         //     threshold: 10240,
//         //     minRatio: 0.8,
//         //   })
//         // );
//         // // webpack setting
//         // config.module.rules.push({
//         //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
//         //   use: {
//         //     loader: "url-loader",
//         //     options: {
//         //       limit: 100000,
//         //     },
//         //   },
//         // });
//
//         return config;
//         // 플러그인 관련 설정
//       },
//       //*********************************//
//     })
// );
// /* config options here */
