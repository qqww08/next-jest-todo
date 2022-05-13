const { pathsToModuleNameMapper } = require("ts-jest");
const nextJest = require("next/jest");
const { compilerOptions } = require("./tsconfig");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /* , { prefix: '<rootDir>/' } */),
};

module.exports = createJestConfig(customJestConfig);
// Next.js는 버전 12부터 Jest의 기본 설정을 제공하고 있습니다. 해당 설정을 사용하기 위해
// next/jest를 불러온 후, 우리가 만든 jest.setup.js 파일을 사용하도록 수정하였습니다.
// 이 설정을 통해, Jest에서 Next.js의 기능(next.config.js, .env 등)을 사용할 수 있게 됩니다.
