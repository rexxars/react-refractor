<!-- markdownlint-disable --><!-- textlint-disable -->

# 📓 Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.0](https://github.com/rexxars/react-refractor/compare/v3.1.1...v4.0.0) (2025-07-23)

### ⚠ BREAKING CHANGES

- Drop support for Node.js version 18 and below.
- Module now uses refractor v5 under the hood

### Features

- drop support for node 18, upgrade dependencies ([63adba5](https://github.com/rexxars/react-refractor/commit/63adba562e32dab7ae3299cc1bc09a2f2f0aefe2))

### Bug Fixes

- upgrade to refractor 5.0.0 ([2a576d2](https://github.com/rexxars/react-refractor/commit/2a576d2feabf0bbd8b041a579fc4d218318d99b4))

## [3.1.1](https://github.com/rexxars/react-refractor/compare/v3.1.0...v3.1.1) (2024-04-09)

### Bug Fixes

- add `main` entrypoint for better ecosystem compatibility ([2a4e230](https://github.com/rexxars/react-refractor/commit/2a4e230d0996aacf540273aa59795580729e0f9f))

## [3.1.0](https://github.com/rexxars/react-refractor/compare/v3.0.0...v3.1.0) (2024-04-08)

### Features

- add `plainText` option/prop ([2148090](https://github.com/rexxars/react-refractor/commit/2148090e3c8ee8edf92f4bda9556224f99c2406d)), closes [#23](https://github.com/rexxars/react-refractor/issues/23)

## [3.0.0](https://github.com/rexxars/react-refractor/compare/v2.1.7...v3.0.0) (2024-04-08)

### ⚠ BREAKING CHANGES

- Module is now ESM-only, and will not work in CommonJS environments.
- Module uses named exports, eg `import {Refractor} from 'react-refractor'`
- Module now requires React 18 or higher.
- Drop `all` export (eg `react-refractor/all`)
- Drop UMD bundle
- Drop ES5 compatibility. Now requires an ES6-compatible environment.

### Features

- use refractor 4, ESM-only ([395a739](https://github.com/rexxars/react-refractor/commit/395a7394c7be26e423d0ccbcfefac4955864650b))
