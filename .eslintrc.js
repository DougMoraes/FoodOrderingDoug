module.exports = {
  extends: 'expo',
  "plugins": ["simple-import-sort"],
  rules: {
    "eol-last": "error",
    "no-unused-vars": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
};
