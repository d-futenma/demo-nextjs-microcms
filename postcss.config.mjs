const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    "postcss-preset-env": {
      features: {
        "custom-media-queries": true,
        "custom-properties": false,
      },
    },
  },
};

export default config;