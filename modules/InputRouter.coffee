module.exports = (->
    inputs = {}

    registerInput = (key,callback) ->
        inputs[key] = callback

    return (
        registerInput : registerInput
    )

)()