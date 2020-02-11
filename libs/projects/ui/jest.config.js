module.exports = {
  name: 'projects-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/projects/ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
