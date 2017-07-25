# NOTE
> TODO: Refactor, do PR to allow customization options to be passed in the package.json config, so we don't need to use this fork any longer

# Default Commit Message Format

Specific commit formats determines what the next version will be.

### Patch Release

```
fix(pencil): stop graphite breaking when too much pressure applied
docs(pencil): stop graphite breaking when too much pressure applied
style(pencil): stop graphite breaking when too much pressure applied
refactor(pencil): stop graphite breaking when too much pressure applied
chore(pencil): stop graphite breaking when too much pressure applied
test(pencil): stop graphite breaking when too much pressure applied
```

### ~~Minor~~ Feature Release

```
feat(pencil): add 'graphiteWidth' option
```

### ~~Major~~ Breaking Release

```
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.
```

# semantic-release commit-analyzer
[![npm version](https://badge.fury.io/js/%40semantic-release%2Fcommit-analyzer.svg)](http://badge.fury.io/js/%40semantic-release%2Fcommit-analyzer)
[![Build Status](https://travis-ci.org/semantic-release/commit-analyzer.svg?branch=master)](https://travis-ci.org/semantic-release/commit-analyzer)
[![Coverage Status](https://coveralls.io/repos/semantic-release/commit-analyzer/badge.svg)](https://coveralls.io/r/semantic-release/commit-analyzer)
[![Dependency Status](https://david-dm.org/semantic-release/commit-analyzer.svg)](https://david-dm.org/semantic-release/commit-analyzer)
[![devDependency Status](https://david-dm.org/semantic-release/commit-analyzer/dev-status.svg)](https://david-dm.org/semantic-release/commit-analyzer#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
