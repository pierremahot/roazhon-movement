module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './components',
            conf: './conf',
            constants: './constants',
            hooks: './hooks',
            navigation: './navigation',
            screens: './screens',
            services: './services',
          },
        },
      ],
    ],
  };
};
