import { createMatricesPengemudi, createRandomPengemudis, destination_choose } from "./common/createRandomPengemudi";
import { runTopsis } from "./common/topsis";
import { Kontrak } from "./type";

import * as fs from "fs";
import path from "path";


const save_file = true

const pengemudis = createRandomPengemudis(80);

const kontrak: Kontrak = {
    expectedMinuteArrived: 154,
    id_kontrak: 1,
    jumlah_pengemudi: 5,
    pickup_lat: destination_choose[0].lat,
    pickup_lon: destination_choose[0].lon,
    time_start: new Date("2022-10-10")
}

const weight = [
    0.2010, 0.2310, 0.05, 0.105, 0.078, 0.2670, 0.0680
]

const is_beneficial: boolean[] = [
    true, false, true, true, false, true, false
]

const matrices = createMatricesPengemudi(pengemudis, kontrak);

console.log(pengemudis);
console.log(matrices);

const topsis_result = runTopsis(matrices, weight, is_beneficial);

const topsis_sort = topsis_result.slice().sort((a, b) => b - a);
console.log(topsis_sort)

const pengemudi_answer = [];
for (let num of topsis_sort.slice(0, kontrak.jumlah_pengemudi)) {
    let idx = topsis_result.indexOf(num);
    console.log(idx, num, pengemudis[idx]);
    pengemudi_answer.push(pengemudis[idx]);
}


const data_pengemudi = {
    pengemudis: pengemudis,
    kontrak: kontrak,

}

const data_topsis = {
    weight: weight,
    is_beneficial: is_beneficial,
    matrices: matrices,
    topsis_result: topsis_result,
    pengemudi_answer: pengemudi_answer,
}

const data_pengemudi_string = JSON.stringify(data_pengemudi);
const data_topsis_string = JSON.stringify(data_topsis);

if (save_file) {
    console.log(path.join(__dirname, "../data_pengemudi.json"));
    console.log(fs.writeFileSync(path.join(__dirname, "../data_pengemudi.json"), data_pengemudi_string));
    console.log(path.join(__dirname, "../data_topsis.json"));
    console.log(fs.writeFileSync(path.join(__dirname, "../data_topsis.json"), data_topsis_string));
}