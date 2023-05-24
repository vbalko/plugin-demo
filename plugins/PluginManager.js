
const config = {
    plugins: [
        {
            path: './message-decorator',
            active: true
        }
    ],
    hooks: {
        "hooks:print": "hooks:print"
    }
}

class PluginManager {
    constructor() {
        this.config = config;
        this.plugins = [];
        this.hooks = {};

        this.initHooks();
        this.loadPlugins();
    }

    getHooks() {
        return config.hooks;
    }

    initHooks() {
        Object.keys(this.config.hooks).forEach(hook => {
            this.hooks[hook] = [];
        });
    }

    loadPlugins() {
        this.config.plugins.forEach(plugin => {
            if (!plugin.active) {
                return;
            }
            const Plugin = require(plugin.path);
            const pluginInstance = new Plugin({});
            const pluginHook = pluginInstance.getHookName();
            if (this.hooks[pluginHook]) {
                this.hooks[pluginHook].push(pluginInstance);
            };
            this.plugins.push(pluginInstance);
        });
    }

    callHook(hook, data) {
        this.hooks[hook].forEach(plugin => {
            data = plugin.call({ data });
        });
        return data;
    }
}

module.exports = PluginManager;