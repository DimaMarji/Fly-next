const path = require('path')

module.exports = {
  i18n: {
    locales: ['default', 'en',  'ar'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {source: "/", destination: "/Home"},
      {source: "/available-travels", destination: "/TravelsList"},

    ];
  }
}