const { parseRawCommit } = require('conventional-changelog/lib/git')

module.exports = function (pluginConfig, {commits}, cb) {
  const MINOR_TYPES = ['fix', 'docs', 'style', 'refactor', 'chore', 'test']
  let type = null

  commits

  .map((commit) => parseRawCommit(`${commit.hash}\n${commit.message}`))

  .filter((commit) => !!commit)

  .every((commit) => {
    if (commit.breaks.length) {
      type = 'major'
      return false
    }

    if (commit.type === 'feat') type = 'minor'

    if (!type && MINOR_TYPES.indexOf(commit.type) !== -1) type = 'patch'

    return true
  })

  cb(null, type)
}
