const zod = require('zod');

const registerUser = zod.object({
    username: zod.string(),
    password: zod.string()
})

const addPatient = zod.object({
    name: zod.string(),
    age: zod.number(),
    tests: zod.string()
})

module.exports = {
    registerUser,
    addPatient
}