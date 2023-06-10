"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/', '/test/', '__test__', 'dist'],
    collectCoverageFrom: ['src/**/*.{js,ts}']
};
exports.default = config;
