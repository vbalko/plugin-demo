

class App {
    constructor(pluginManager) {
        this.pluginManager = pluginManager;
        this.message = "Hello World";
        this.init();
    }

    init() {
    
    }

    print() {
        const hookName = this.pluginManager.getHooks()['hooks:print'];
        const message = this.pluginManager.callHook(hookName, { message: this.message });
        console.log(message.message);
    }

}

module.exports = App;