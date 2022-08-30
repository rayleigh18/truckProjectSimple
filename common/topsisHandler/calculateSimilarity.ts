export function calculateSimilarity(best_euclid_distance: number[], worst_euclid_distance: number[],) {
    // calculate similarity
    const similarity = best_euclid_distance.map((_, i) => {
        let ans = worst_euclid_distance[i] / (worst_euclid_distance[i] + best_euclid_distance[i]);
        if (isNaN(ans)) {
            return 0;
        }
        return ans;
    });
    return similarity;
}