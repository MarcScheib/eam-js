module.exports = {
  name: 'dashboard-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/dashboard/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
