'use strict'
exports.__esModule = true
var plugin_1 = require('@parcel/plugin')
exports['default'] = new plugin_1.Transformer({
  transform: async function (_a) {
    var asset = _a.asset
    const code = await asset.getCode()

    asset.type = 'js'
    asset.setCode(
      `
    	import {css} from 'lit';
    	module.exports = css\`${code}\`
    	`
    )
    return [asset]
  }
})
