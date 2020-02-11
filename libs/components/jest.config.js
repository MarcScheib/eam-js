module.exports = {
  name: 'components',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/components',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
