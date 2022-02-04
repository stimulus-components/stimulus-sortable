# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Adding `responseKind` option.

## [3.1.0] - 2021-10-12

### Chore

- Moving from `@rails/ujs` to the new `@rails/request.js`

## [3.0.0] - 2021-10-11

### Chore

- **Breaking** Upgrading Stimulus to `3.x` and change namespace from `stimulus` to `@hotwired/stimulus`.
- **Breaking** Moving from [Snowpack](https://www.snowpack.dev/) to [Vite](https://github.com/vitejs/vite)
- Upgrading Node to 14.18.0
- Moving to TypeScript

## [2.1.0] - 2021-04-28

### Added

- Adding `paramName` option.

## [2.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0

### Changed

- **Breaking** Using the new `values` static property

```diff
- <ul data-controller="sortable" data-sortable-handle=".handle">
+ <ul data-controller="sortable" data-sortable-handle-value=".handle">
```

## [1.2.0] - 2020-12-03

### Changed

- Destroy the instance on `disconnect`.
- Adding `defaultOptions` support.

## [1.1.0] - 2020-10-19

### Added
- Adding data-sortable-resource-name option  2021d57

### Changed
- Importing rails-ujs
- Using window._rails_loaded  4dc14c3

## [1.0.0] - 2020-10-15

### Added

- Adding controller
