/** @type {import('jest').Config} */

module.exports = {
  // verbose: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jest-environment-jsdom",
  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest',
  // },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    // '^.+\\.jsx?$': 'babel-jest',
    // '^.+\\.vue$': 'vue-jest',
  },

  moduleFileExtensions: ["jsx", "js","json"],
  moduleNameMapper: {
    // '^\\.\\/src/(.*)$': '<rootDir>/src/$1',
    '\\.css$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>/src/'],

};
