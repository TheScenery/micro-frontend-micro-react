const { name } = require('./package');

module.exports = {
  webpack: function(config) {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    return config;
  },
  devServer: function(configFunction) {
    return function(options) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(options);

      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      config.historyApiFallback = true;
      config.hot = false;
      config.liveReload = false;
      return config;
    };
  }
};