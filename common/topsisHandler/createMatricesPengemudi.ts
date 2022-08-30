import { Kontrak, Pengemudi } from "../../type";

export function createMatricesPengemudi(pengemudis: Pengemudi[], kontrak: Kontrak): number[][] {
    let ans: number[][] = [];
    const now = new Date();
    ans = pengemudis.map(pengemudi => {
        const dist_squared = Math.pow((pengemudi.last_pengantaran_lat - kontrak.pickup_lat), 2) + Math.pow(pengemudi.last_pengantaran_lon - kontrak.pickup_lon, 2);
        return [
            Math.abs(kontrak.time_start.getTime() - pengemudi.last_pengantaran.getTime()) / (1000 * 60 * 60),
            Math.abs(Math.sqrt(dist_squared)),
            Math.floor(((now.getTime() - pengemudi.awal_bekerja.getTime()) / (60 * 60 * 24))),
            pengemudi.kecepatan_pengiriman_avg,
            pengemudi.komplain_avg,
            pengemudi.jumlah_susut_avg,
            pengemudi.kecelakaan_avg,
        ]
    });

    return ans;
}