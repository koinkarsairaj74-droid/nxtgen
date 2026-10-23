/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages project sites are hosted under /<repository>.
  basePath: process.env.GITHUB_PAGES === "true" ? "/nxtgen" : "",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/nxtgen/" : undefined,
  trailingSlash: true,
  images: { unoptimized: true }
};
export default nextConfig;
