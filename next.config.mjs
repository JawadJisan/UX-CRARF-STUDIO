import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "www.trivaitltd.com",
    ], // Allow images from Unsplash
  },
};

const sentryWebpackPluginOptions = {
  // Suppresses source map uploading logs during build
  silent: true,
  org: "jawad-jisan",
  project: "next_web",

  // Deletes source maps after upload to prevent serving them
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
