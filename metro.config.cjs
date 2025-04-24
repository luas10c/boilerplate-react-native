const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { resolve } = require('node:path')

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    getModulesRunBeforeMainModule() {
      return [
        resolve(__dirname, 'src/index.js'),
        resolve(__dirname, 'src/index.ts')
      ]
    }
  }
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
