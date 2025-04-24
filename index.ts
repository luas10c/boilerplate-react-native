import { AppRegistry } from 'react-native'

import { App } from './src/App'

import { name } from './app.json' with { type: 'json' }

AppRegistry.registerComponent(name, () => App)
