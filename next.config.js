/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/studio",
        permanent: true, // Set this to `false` if you want a temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;
