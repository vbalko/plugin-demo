# Plugin Demo App

This readme provides an overview of a Node.js application that demonstrates and serves as a proof-of-concept for plugin implementation.

The application is divided into three parts:

1. Main application (`App.js`)
2. Plugin manager (`plugins/PluginManager.js`)
3. MessageDecorator plugin (`plugins/message-decorator`)

## Architecture

### Hook
A hook serves as an extension point within the application. It is strategically placed in a function or method that can be extended.

### Plugin
A plugin is an additional functionality that can be integrated into the application, enabling the addition of new features. Plugins are designed to be used with specific hooks and operate on data provided by those hooks. 

> To create a plugin, it must extend the `AbstractPlugin` class and include a `pluginConfig` object.

### Plugin Manager
The plugin manager is responsible for loading plugins based on a configuration object passed to it. It also handles the invocation of plugins for the hooks.

> The plugin manager should be imported into the application. At the desired hook location, the following code should be used:

```js
const PluginManager = require('./plugin-manager');
const pluginManager = new PluginManager();

function toBeExtended(data) {
    // This is where the plugin can be called
    const newData = pluginManager.callHooks('hookName', data);
}
```

## Get Started
To begin using the provided example plugin, follow these steps:

1. Install dependencies:
```
npm install
```

2. Run the application:
```
node index.js
```
