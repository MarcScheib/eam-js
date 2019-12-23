module.exports = {
  name: 'projects-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/projects/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
