module.exports = {
  name: 'utilities',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/utilities',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
