SonnyJimEngine  = require('./SonnyJimEngine')
includedModules = require('../modules/ModuleRegister')

#set up modules
for mod in includedModules
    SonnyJimEngine.registerModule(mod) 