import type { NextConfig } from "next";

const repositoryName = "engineering-digital-portfolio";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = configuredBasePath || (isGithubActions ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
