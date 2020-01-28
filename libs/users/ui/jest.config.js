module.exports = {
  name: 'users-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/users/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
