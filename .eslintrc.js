module.exports = {
  // Other ESLint configurations...
  "ignorePatterns": ["**/*"],
  "overrides": [
    {
      "files": ["src/components/lib/**/*.js"],
      "rules": {
        // Disable ESLint for files in the specified directory
        "eslint-disable": "off"
      }
    }
  ]
};
