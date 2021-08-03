module.exports = {
  stories: ['../stories/**/*.stories.@(mdx|ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-docs'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  }
};
