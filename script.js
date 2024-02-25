alert('APLIKASI TIKET');

// input nama dan usia
var nama = prompt("Masukkan nama Anda:");
var usia = parseInt(prompt("Masukkan usia Anda:"));

// Validasi usia yang masuk akal
if (usia < 0 || usia > 100 || isNaN(usia)) {
    alert("Usia yang Anda masukkan tidak valid.");
} else {
    // Validasi usia di bawah 13 tahun
    if (usia < 13) {
        alert("Usia Anda belum cukup.");
    } else {
        // Pilih studio A, B, atau C
        var pilihanStudio = prompt("Pilih studio: A, B, atau C (Gunakan Huruf Kapital)");
        if (pilihanStudio === "A" || pilihanStudio === "B" || pilihanStudio === "C") {
            alert(`Selamat datang \n Tiket atas nama ${nama} dengan usia ${usia} tahun \n Anda telah memilih studio ${pilihanStudio} `);
        } else {
            alert("Pilihan studio tidak valid.");
        }
    }
}
