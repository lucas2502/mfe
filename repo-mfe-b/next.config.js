const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe_b',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './AppB': './components/AppB',
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
