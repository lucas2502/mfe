const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe_a',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './AppA': './components/AppA',
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true }
        },
        extraOptions: {
          exposePages: false
        }
      })
    );
    return config;
  }
};
