import { runTopsis } from "./common/topsis";


const weight = [
    0.3, 0.05, 0.2, 0.15, 0.05, 0.15, 0.05, 0.05
]

const is_beneficial: boolean[] = [
    true, true, true, true, true, true, true, true
]

const matrices = [
    [5, 5, 5, 5, 5, 3, 3, 5],
    [2, 4, 5, 1, 5, 4, 3, 5],
    [3, 5, 4, 3, 3, 4, 3, 3],
    [3, 5, 3, 4, 5, 4, 5, 5],
    [4, 4, 4, 4, 3, 4, 5, 3]
];
console.log(matrices);

const topsis_result = runTopsis(matrices, weight, is_beneficial);

const topsis_sort = topsis_result.slice().sort((a, b) => b - a);