/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = withAntdLess({
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"],
  },
  lessVarsFilePath: "./src/styles/antd.less",
  ...nextConfig,
  webpack(config) {
    return config;
  },
});
