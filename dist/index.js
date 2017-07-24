'use strict';

var _require = require('conventional-changelog/lib/git');

var parseRawCommit = _require.parseRawCommit;

module.exports = function (pluginConfig, _ref, cb) {
  var commits = _ref.commits;

  var MINOR_TYPES = ['fix', 'docs', 'style', 'refactor', 'chore', 'test'];
  var type = null;

  commits.map(function (commit) {
    return parseRawCommit(commit.hash + '\n' + commit.message);
  }).filter(function (commit) {
    return !!commit;
  }).every(function (commit) {
    if (commit.breaks.length) {
      type = 'major';
      return false;
    }

    if (commit.type === 'feat') type = 'minor';

    if (!type && MINOR_TYPES.indexOf(commit.type) !== -1) type = 'patch';

    return true;
  });

  cb(null, type);
};