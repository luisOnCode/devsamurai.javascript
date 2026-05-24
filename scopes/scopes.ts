// "var" is not affected by scope, because it is set in global scope

var x = 10
console.log("declaring var x before scope:", x)

{
    console.log("print var x scope:", x)
    x = 20
    console.log("changing var x inside scope:", x)

    var y = 100
    console.log("declaring var y inside scope:", y)
}

console.log("changes made in var x inside scope are still valid after that:", x)
console.log("var y is still defined after scope:", y)

// the same is not possible for let, because its scope is set inside function

let let_x = 10
console.log("declaring var let_x before scope:", let_x)

{
    console.log("print var let_x scope:", let_x)
    let_x = 20
    console.log("changing var let_x inside scope:", let_x)

    let let_y = 100
    console.log("declaring var let_y inside scope:", let_y)
}

console.log("changes made in var let_x inside scope are still valid after that:", let_x)
// console.log("var let_y IS NOT DEFINED after scope:", let_y)

// the same is not possible for let, because its scope is set inside function

const const_x = 10
console.log("declaring var const_x before scope:", const_x)

{
    console.log("print var const_x scope:", const_x)
    // const_x = 20
    // console.log("changing var const_x inside scope:", const_x)

    const const_y = 100
    console.log("declaring var const_y inside scope:", const_y)
}

console.log("changes made in var const_x inside scope are still valid after that:", const_x)
// console.log("var const_y IS NOT DEFINED after scope:", const_y)

function useState(param: any) {
    const sum1 = param + 1

    return [param, sum1]
}

const [teste, setTeste] = useState(0)

console.log(teste)
console.log(setTeste)