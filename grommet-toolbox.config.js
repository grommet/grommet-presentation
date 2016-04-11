import path from 'path';

function getPackageJSON () {
  delete require.cache[require.resolve('./package.json')];
  var packageJSON = require('./package.json');
  delete packageJSON.config;
  delete packageJSON.scripts;
  packageJSON.main = 'index.js';
  return packageJSON;
}

export default {
  dist: path.resolve(__dirname, 'dist'),
  copyAssets: [
    {
      filename: 'package.json',
      asset: JSON.stringify(getPackageJSON(), null, 2)
    },
    {
      asset: 'src/js/**',
      babel: true
    },
    {
      asset: 'src/scss/**',
      dist: 'dist/scss/'
    }
  ],
  scssAssets: ['src/scss/**/*.scss'],
  jsAssets: [
    'src/js/**/*.js'
  ],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  webpack: {
    //alias: { // TODO: remove, just for local dev
    //  'grommet/scss': path.resolve(__dirname, '../grommet/src/scss'),
    //  'grommet': path.resolve(__dirname, '../grommet/src/js')
    //},
    output: {
      filename: 'grommet-presentation.min.js',
      libraryTarget: 'var',
      library: 'GrommetPresentation'
    },
    resolve: {
      modulesDirectories: ['node_modules', 'src/js', 'src/scss']
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'grommet': 'Grommet'
    }
  },
  distPreprocess: ['dist-css'],
  scsslint: true
};
