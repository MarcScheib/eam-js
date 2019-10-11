module.exports = {
  name: 'projects-overview-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/projects/overview-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
