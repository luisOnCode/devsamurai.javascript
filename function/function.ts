function sum(...numbers: number[]): number {
    let ans = 0;

    for (const n of numbers) {
        ans += n
    }

    return ans;
}

console.log(sum(1,2,3,4, Number("teste")));

function showArr(...numbers: number[]): void {
    console.log(numbers)
}

showArr(1,2,3,4,5,6,7,8,9)