// Mengisi data jadwal dokter
document.getElementById("kodePertemuan").textContent = "K123";
document.getElementById("departemen").textContent = "Departemen Kesehatan";
document.getElementById("hariTanggal").textContent = "Senin, 12 Juli 2023";
document.getElementById("jam").textContent = "09:00 - 10:00";
document.getElementById("namaDokter").textContent = "Dr. John Doe";

// Menambahkan event listener untuk tombol "Ubah Jadwal Pertemuan"
document.getElementById("ubahJadwalBtn").addEventListener("click", function() {
  // Logika atau aksi yang ingin dilakukan ketika tombol "Ubah Jadwal Pertemuan" diklik
  console.log("Tombol 'Ubah Jadwal Pertemuan' diklik");
});

// Menambahkan event listener untuk tombol "Batalkan Pertemuan"
document.getElementById("batalkanJadwalBtn").addEventListener("click", function() {
  // Logika atau aksi yang ingin dilakukan ketika tombol "Batalkan Pertemuan" diklik
  console.log("Tombol 'Batalkan Pertemuan' diklik");
});
