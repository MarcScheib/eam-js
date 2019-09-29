module.exports = {
  name: 'common-navigation',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/navigation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
