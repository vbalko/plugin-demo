
const AbstractPlugin = require("../abstract-plugin");

const pluginConfig = {
    name: "MessageDecorator",
    hook: "hooks:print"
}
//
class MessageDecorator extends AbstractPlugin {
    constructor({}) {
        super({});
        this.pluginName = pluginConfig.name;
        this.hookName = pluginConfig.hook;
    }

    register(){
        console.log("Registering MessageDecorator");
    }

    call({data}){
        console.log("MessageDecorator called");
        data.message = `>>> ${data.message} <<<`;
        return data;
    }

}

module.exports = MessageDecorator;