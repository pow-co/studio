module.exports = {
  basePath: "/studio",
  webpack: (config) => {
    config.experiments.asyncWebAssembly = true
    return config;
  },
};
