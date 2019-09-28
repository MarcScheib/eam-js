module.exports = {
  name: 'eam-js',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/eam-js',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
