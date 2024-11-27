import type { StorybookConfig } from "@storybook/react-webpack5";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      // Modify config for development
    }
    if (configType === 'PRODUCTION') {
      // Modify config for production
    }
    config.module.rules.push({
      test: /\.less$/i,
      include: path.resolve(__dirname, '../node_modules/react-colors-beauty'),
      use: [
        'style-loader',
        'css-loader',
        {
          loader: "less-loader",
          options: { implementation: require.resolve("less") }
        },
      ]
    })
    config.externals = {
      // @ts-ignore
      ...config.externals,
      fabric: 'fabric'
    }
    // // @ts-ignore
    // config.plugins.push(new webpack.ProvidePlugin({
    //   fabric: require.resolve('fabric'),
    // }));
    return config;
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        },
        legacyDecorator: true,
      },
      parser: {
        syntax: 'typescript',
        decorators: true,
      }
    }
  }),
};
export default config;
