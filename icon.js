define(['text'], function (text) {
  return {
    load: function (name, req, onLoad, config) {
      text.get(req.toUrl('edx-ui-toolkit/svg/' + name + '.svg'), function (icon) {
        onLoad(icon);
      }, onLoad.error);
    },
  };
});
