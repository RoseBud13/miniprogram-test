module.exports = {
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
  '*.{css,less,scss,wxss}': ['stylelint --fix', 'prettier --write'],
  '*.{js,ts,wxml,html,json,css,less,md}': ['prettier --write'],
};
