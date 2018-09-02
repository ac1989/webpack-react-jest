module.exports = {
  collectCoverageFrom: ['**/src/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/', '/__mocks__/'],
  moduleNameMapper: {
    '\\.less$': require.resolve('./client/__tests__/__mocks__/style-mock')
  },
  moduleDirectories: ['node_modules', '<rootDir>/client/src'],
  setupFiles: ['./setupTests.js']
};
