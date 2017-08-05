const path = require('path');

module.exports = {
  // port where app should be started
  PORT: 3045,

  // type of favicons to generate, WARNING: dramaticly decreases build speed, use wisely
  FAVICONS: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: false,
  },

  // theme color for mobile browsers
  THEME_COLOR: '#ffeeee',

  // path where all project files should be put after building
  PUBLIC_PATH: path.join(__dirname, '../public'),
};
