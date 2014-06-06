'use strict';

var template = require('art-template');

module.exports = function(content, file, conf) {
  fis.util.merge(template.defaults, conf);
  
  return template.compile(content).toString()
    .replace(/^function anonymous/, 'function')
    .replace('$utils=this', '$utils=template.utils');
};
