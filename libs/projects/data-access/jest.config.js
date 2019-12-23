module.exports = {
  name: 'projects-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/projects/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
