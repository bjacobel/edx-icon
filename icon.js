define(['text'], function (text) {
  return {
    load: function (name, req, onLoad, config) {
      text.get(req.toUrl('text!edx-ui-toolkit/svg/' + name + '.svg!strip'), function (icon) {
        onLoad(icon);
      }, onLoad.error);
    },
  };
});
