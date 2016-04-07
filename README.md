###edx-icon

[![npm version](https://badge.fury.io/js/edx-icon.svg)](https://badge.fury.io/js/edx-icon)

RequireJS plugin to use the [edx-ui-toolkit](https://github.com/edx/edx-ui-toolkit)'s icons in your project.

_Usage:_

1. `npm install --save edx-icon`
2. Add `'edx-icon': 'node_modules/edx-icon/icon'` to your RequireJS paths config.
3. Require an icon in your file:

```javascript
define(['edx-icon!arrow-up'], function(arrowUpSvg) {
  'use strict';
  ...
});
```

This saves you from needing to remember the syntax and correct paths to load the icon directly with requirejs-text:

    text!edx-ui-toolkit/svg/arrow-up.svg

But you can still do it that way too, if you'd like.
