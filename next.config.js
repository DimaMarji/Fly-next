const path = require('path')
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
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