/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The site currently uses https://placehold.co placeholder images. Those
    // are served as SVG and the Next.js image optimizer cannot fetch/convert
    // them reliably, so we bypass optimization for now. Browsers still load
    // the placeholders directly.
    //
    // TODO: once real raster photos are added in /public/images/, set this
    // back to `unoptimized: false` (or remove it) to re-enable optimization.
    unoptimized: true,
  },
};

export default nextConfig;
