module.exports = {
  name: 'projects-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/projects/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
