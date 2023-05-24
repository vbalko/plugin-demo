const App = require('./App');
const PluginManager = require('./plugins/PluginManager');
const pluginManager = new PluginManager();

const app = new App(pluginManager);

app.print();
