const path = require('path')
 
module.exports = {
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