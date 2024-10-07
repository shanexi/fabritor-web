const { getESLintConfig } = require('@applint/spec');

module.exports = getESLintConfig('react-ts');
export const extends = ['plugin:storybook/recommended'];
