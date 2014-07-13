module.exports = (->
    modules = {}

    registerModule = (moduleObj) ->
        if modules[moduleObj.name]?
            throw new Error("Duplicate modules for " + moduleObj.name + ".")
        modules[moduleObj.name] = moduleObj.module

    return registerModule : registerModule

)()