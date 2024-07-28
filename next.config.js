const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:"/app",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
