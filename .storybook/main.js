const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../src/**/*.stories.(js|mdx|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links','@storybook/addon-knobs/register','@storybook/addon-docs/preset'],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
            plugins: [
              [
                require.resolve('babel-plugin-named-asset-import'),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]'
                    }
                  }
                }
              ]
            ]
          }
        },
        require.resolve('react-docgen-typescript-loader')
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};