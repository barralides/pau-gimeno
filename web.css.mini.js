var uglifycss = require('uglifycss');

var uglified = uglifycss.processFiles(
    [
      'css/base/reset.css',
      'css/base/fonts.css',
      'css/base/typography.css',
      'css/base/base.css',
      'css/sections/header.css',
      'css/sections/class.css',
      'css/sections/comments.css',
      'css/sections/about.css',
      'css/sections/prices.css',
      'css/sections/contact.css',
      'css/sections/media-queries.css'
    ],
    { expandVars: true }
);

console.log(uglified);
