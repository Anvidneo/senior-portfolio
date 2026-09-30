// Enforces the portfolio commit standard on every commit in this repo via the
// .husky/commit-msg hook: Conventional Commits plus a required gitmoji.
//
//   <type>(<scope>): :gitmoji: <descripción>
//
// The gitmoji allowlist and the per-type recommendations live in
// commitlint-gitmoji.cjs; AGENTS.md documents them for humans and agents.
module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [require('./commitlint-gitmoji.cjs')],
  rules: {
    // Base convention, plus `deps` for dependency bumps — common in this repo.
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'deps',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'gitmoji-header': [2, 'always'],
    'subject-empty': [2, 'never'],
  },
};
