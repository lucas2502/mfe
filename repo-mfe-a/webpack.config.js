const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe_a',
        exposes: {
          mfe_a: 'mfe_a@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          mfe_b: 'mfe_b@http://localhost:3002/_next/static/chunks/remoteEntry.js',
        },
        exposes: {},
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true }
        },
      })
    );
    return config;
  },
};
