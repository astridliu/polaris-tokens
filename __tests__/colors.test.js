/* eslint-env jest */

const fs = require('fs');
const path = require('path');

const colorFiles = [
  'colors.android-colors.xml',
  'colors.color-map.scss',
  'colors.custom-properties.css',
  'colors.json',
  'colors.ase.json',
  'colors.raw.json',
  'colors.scss',
  'Polaris.sketchpalette',
  'index.d.ts',
];

colorFiles.map((filename) =>
  it(`renders ${filename} correctly`, () => {
    const contents = fs.readFileSync(
      path.join(__dirname, '..', 'dist', filename),
      {
        encoding: 'utf-8',
      },
    );
    expect(contents).toMatchSnapshot();
  }),
);
