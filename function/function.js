function sum(...numbers) {
    let ans = 0;
    for (const n of numbers) {
        ans += n;
    }
    return ans;
}
console.log(sum(1, 2, 3, 4, Number("teste")));
function showArr(...numbers) {
    console.log(numbers);
}
showArr(1, 2, 3, 4, 5, 6, 7, 8, 9);
export {};
//# sourceMappingURL=function.js.map