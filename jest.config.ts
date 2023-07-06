const esModules = [].join('|');

const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
