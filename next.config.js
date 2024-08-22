module.exports = {
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "pbs.twimg.com", // Twitter Profile Picture
      "api.microlink.io", // Microlink Image Preview
      "avatars.githubusercontent.com", // GitHub avatars
      "images.credly.com" // credly images
    ],
  },
  webpack: (config, { dev, isServer }) => {
    return config;
  },
};
