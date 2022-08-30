export function calculateBestWorst(matrices_weight_multiply: number[][], kriteria_type: boolean[]) {
    const row_length = matrices_weight_multiply.length;
    const col_length = matrices_weight_multiply[0].length;
    // calculate best scenario
    const best_scenario = kriteria_type.map(val => 0.0);
    const worst_scenario = kriteria_type.map(val => 0.0);

    for (let j = 0; j < col_length; j++) {
        let max = -Infinity;
        let min = Infinity;
        for (let i = 0; i < row_length; i++) {
            if (matrices_weight_multiply[i][j] > max) {
                max = matrices_weight_multiply[i][j];
            }

            if (matrices_weight_multiply[i][j] < min) {
                min = matrices_weight_multiply[i][j];
            }
        }
        if (kriteria_type[j]) {
            best_scenario[j] = max;
            worst_scenario[j] = min;
        }
        else {
            best_scenario[j] = min;
            worst_scenario[j] = max;
        }
    }

    return {
        best_scenario: best_scenario,
        worst_scenario: worst_scenario
    }
}