module.exports = {
  name: 'eam-js',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/eam-js',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
