module.exports = {
  name: 'auth-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
