// 이 파일에서만 no-global-assign ESLint 옵션을 비활성화한다.
// eslint-disabel no-global-assign

require = require('esm')(module /*, options*/);
module.exports = require('./main.js');
