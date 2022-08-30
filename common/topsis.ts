import { calculateBestWorst } from "./topsisHandler/calculateBestWorst";
import { calculateDistance } from "./topsisHandler/calculateDistance";
import { calculateSimilarity } from "./topsisHandler/calculateSimilarity";
import { multiplyWeight } from "./topsisHandler/multiplyWeight";
import { normalizeMatrices } from "./topsisHandler/normalize";

export function runTopsis(matrices_transpose: number[][], kriteria_weight: number[], kriteria_type: boolean[]) {

    // Normalize kriteria weight
    const sum_kriteria = kriteria_weight.reduce((sum, a) => sum + a, 0);
    const kriteria_weight_normalized = kriteria_weight.map((_, i) => {
        return kriteria_weight[i] / sum_kriteria;
    });

    // Normalize pengemudi
    const matrices_normalize = normalizeMatrices(matrices_transpose);
    console.log("Normalization");
    console.log(matrices_normalize);

    // Multiply with weight
    const matrices_weight_multiply = multiplyWeight(matrices_normalize, kriteria_weight_normalized);
    console.log("Weight");
    console.log(matrices_weight_multiply);

    // calculate best and worst scenario
    const scenario = calculateBestWorst(matrices_weight_multiply, kriteria_type);

    console.log("best_scenario");
    console.log(scenario.best_scenario);

    console.log("worst_scenario");
    console.log(scenario.worst_scenario);

    // calculate euclid distance
    const euclid_distance = calculateDistance(matrices_weight_multiply, scenario.best_scenario, scenario.worst_scenario);

    console.log("best_euclid_distance");
    console.log(euclid_distance.best_euclid_distance);

    console.log("worst_euclid_distance");
    console.log(euclid_distance.worst_euclid_distance);

    // calculate similarity
    const similarity = calculateSimilarity(euclid_distance.best_euclid_distance, euclid_distance.worst_euclid_distance);

    console.log("similarity");
    console.log(similarity);

    return similarity;
}