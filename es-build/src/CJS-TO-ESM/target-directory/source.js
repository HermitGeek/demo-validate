var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};

// image.png
var require_image = __commonJS((exports, module) => {
  module.exports = "./image.YL7GDHCE.png";
});

// source.js
var require_source = __commonJS((exports, module) => {
  var obj = {
    image: require_image()
  };
  module.exports = {
    obj
  };
});
export default require_source();
//# sourceMappingURL=source.js.map
