import { Kontrak, Pengemudi } from "../type";

export const destination_choose = [
    {
        name: "Palembang",
        lat: -2.990934,
        lon: 104.756554,
    },
    {
        name: "Medan",
        lat: 3.784303,
        lon: 98.694221,
    },
    {
        name: "Padang",
        lat: -0.942942,
        lon: 100.371857,
    },
]

export function createRandomPengemudis(total: number): Pengemudi[] {
    let ans: Pengemudi[] = [];

    for (let i = 0; i < total; i++) {
        let new_peng = createRandomPengemudi(i);
        ans.push(new_peng);
    }

    return ans;
}

function createRandomPengemudi(id: number): Pengemudi {
    const awal_bekerja = randomDate(new Date("2015-03-25"), new Date());
    const last_pengantaran = randomDate(awal_bekerja, new Date());
    const pos_awal = destination_choose[Math.floor(Math.random() * destination_choose.length)]

    let ans: Pengemudi = {
        id_pengemudi: id,
        awal_bekerja: awal_bekerja,
        jumlah_susut_avg: Math.random(),
        kecelakaan_avg: Math.random(),
        kecepatan_pengiriman_avg: Math.random(),
        komplain_avg: Math.random(),
        last_pengantaran: last_pengantaran,
        nama: "Pengemudi-" + id,
        last_pengantaran_lat: pos_awal.lat,
        last_pengantaran_lon: pos_awal.lon
    };
    return ans;
}


function randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
