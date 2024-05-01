module.exports = {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest'
    },
    extensionsToTreatAsEsm: ['.vue'],
    testEnvironment: 'jest-environment-jsdom'
  };
  