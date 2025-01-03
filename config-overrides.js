const path = require('path');

module.exports = function override(config, env) {
  // Ajouter les polyfills nécessaires pour les modules manquants
  config.resolve.fallback = {
    fs: false,
    path: require.resolve('path-browserify'),
    stream: require.resolve('stream-browserify'),
    http: require.resolve('stream-http'),
    zlib: require.resolve('browserify-zlib'),
    assert: require.resolve('assert/'),
    url: require.resolve('url/')
  };
  return config;
};
