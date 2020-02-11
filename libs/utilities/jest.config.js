module.exports = {
  name: 'utilities',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/utilities',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
