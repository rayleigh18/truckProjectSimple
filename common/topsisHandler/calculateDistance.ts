export function calculateDistance(matrices_weight_multiply: number[][], best_scenario: number[], worst_scenario: number[]) {

    const col_length = matrices_weight_multiply[0].length;

    const best_euclid_distance = matrices_weight_multiply.map((_, i) => {
        let sum_euclid = 0;
        for (let j = 0; j < col_length; j++) {
            sum_euclid += Math.pow(matrices_weight_multiply[i][j] - best_scenario[j], 2)
        }
        return Math.sqrt(sum_euclid);
    });

    const worst_euclid_distance = matrices_weight_multiply.map((_, i) => {
        let sum_euclid = 0;
        for (let j = 0; j < col_length; j++) {
            sum_euclid += Math.pow(matrices_weight_multiply[i][j] - worst_scenario[j], 2)
        }
        return Math.sqrt(sum_euclid);
    });

    return {
        best_euclid_distance: best_euclid_distance,
        worst_euclid_distance: worst_euclid_distance,
    }
}