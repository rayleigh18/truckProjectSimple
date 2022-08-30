/**
 * Model Pengemudi
 * 
 */
export type Pengemudi = {
    id_pengemudi: number
    nama: string
    last_pengantaran: Date
    last_pengantaran_lat: number
    last_pengantaran_lon: number
    awal_bekerja: Date
    kecepatan_pengiriman_avg: number
    komplain_avg: number
    jumlah_susut_avg: number
    kecelakaan_avg: number
}

/**
 * Model KriteriaPengemudi
 * 
 */
export type KriteriaPengemudi = {
    id_kriteria: number
    nama_kriteria: string
    value: number
}


export type Kontrak = {
    id_kontrak: number
    jumlah_pengemudi: number
    expectedMinuteArrived: number
    time_start: Date
    pickup_lat: number
    pickup_lon: number
}