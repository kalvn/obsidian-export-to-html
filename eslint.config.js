import neostandard from 'neostandard';

export default [
  ...neostandard({
    semi: true,
    ts: true
  }),
  {
    ignores: [
      'main.js',
      'node_modules/*'
    ]
  }
];
