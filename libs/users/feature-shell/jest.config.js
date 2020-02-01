module.exports = {
  name: 'users-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/users/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
