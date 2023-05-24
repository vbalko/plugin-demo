# Plugin demo app
Demo and PoC for plugin implementation in Node.js

This example consists from three parts
1. Main application (./App.js)
2. Plugin manager (./plugins/PluginManager.js)
3. MessageDecorator plugin (./plugins/message-decorator)

## Architecture
### Hook
Hook is extension point in application. It is added to the application in design time on exact place in the function/method which could be extended.
### Plugin
Plugin is additional functionality, which can add new functionality to application. It is designed to be used for exact **hook** and works with data provided by the hook. 
> Plugin have to extend AbstractPlugin class and must have *pluginConfig* object
### Plugin Manager
Plugin manager is class, which manages loading plugins - based on a config object passed into it.

It also handles calling the plugins for hooks.

> Plugin manager should be imported into the application and on a place, where there should be some hook, call 
```js
    const PluginManager = require(./plugin-manager);
    const pluginManager = new PluginManager();

    function toBeExtended(data) {
        //here is place where plugin could be called
        const newData = pluginManager.callHooks('hookName',data);
    }
```

## Get started
To get started with prepared example plugin
```
npm install
node index.js
```