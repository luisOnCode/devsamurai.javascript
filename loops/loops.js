let i = 0;
while (i < 5) {
    console.log(`this is the "While" loop: ${i}`);
    ++i;
}
for (let i = 0; i < 5; ++i) {
    console.log(`this is the "For" loop: ${i}`);
}
console.log("---------------||---------------");
const nomesArr = ["Ada", "Claire", "Jill", "Ashley"];
for (let i = 0; i < nomesArr.length; ++i) {
    console.log(`this is the names showed with "for": ${nomesArr[i]}`);
}
for (const nome of nomesArr) {
    console.log(`this is the names showed with "for of": ${nome}`);
}
const personObj = {
    name: "Charles",
    age: 28,
    team: "Ferrari"
};
for (const prop in personObj) {
    console.log(`these are the properties of a person printed with "for in": ${personObj[prop]}`);
}
export {};
//# sourceMappingURL=loops.js.map