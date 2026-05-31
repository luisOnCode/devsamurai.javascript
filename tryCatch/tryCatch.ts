try {
    console.log("Hello World")

    throw "Texto 1"
    throw "Texto 2"
} catch (myCatch) {
    console.log(myCatch)
} finally {
    console.log("É isso aí")
}

const myTest = new Error("Usuário não encontrado")

throw myTest

const err = new Error("Teste de Erro")

console.log(err.stack)

try {
    console.log(nonExistentVar)
} catch (err) {
    console.log(err)
}
