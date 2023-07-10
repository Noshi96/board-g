import "./env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  transpilePackages: ["ui"],
};

export default config;
