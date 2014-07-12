includedModules = require('../modules/ModuleRegister')

#set up modules
for mod in includedModules
    console.log mod #eventually call modules' init and register module with main game module