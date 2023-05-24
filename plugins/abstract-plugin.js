
const pluginConfig = {
    name: "AbstractPlugin",
    hook: "AbstractHook"
}

class AbstractPlugin {
    constructor({}) {
        this.pluginName = pluginConfig.name;
        this.hookName = pluginConfig.hook;
    }

    register(){
        console.log("Not implemented");
    }

    call(){
        console.log("Not implemented");
    }

    getPluginName(){
        return this.pluginName;
    }

    getHookName(){
        return this.hookName;
    }

}

module.exports = AbstractPlugin;