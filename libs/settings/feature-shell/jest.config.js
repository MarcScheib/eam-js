module.exports = {
  name: 'settings-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/settings/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
