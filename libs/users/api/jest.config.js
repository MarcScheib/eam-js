module.exports = {
  name: 'users-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/users/api',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
