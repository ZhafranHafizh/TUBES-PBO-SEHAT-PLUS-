var dokterOptions = [
    "Dr. John Doe",
    "Dr. Jane Smith",
    "Dr. Michael Johnson"
  ];
  
  function tambahJadwal() {
    var table = document.getElementById("jadwalTable");
    var row = table.insertRow(-1);
  
    var tanggalCell = row.insertCell(0);
    tanggalCell.innerHTML = '<input type="date" class="tanggal">';
  
    var jamMulaiCell = row.insertCell(1);
    jamMulaiCell.innerHTML = '<input type="time" class="jamMulai">';
  
    var jamSelesaiCell = row.insertCell(2);
    jamSelesaiCell.innerHTML = '<input type="time" class="jamSelesai">';
  
    var namaDokterCell = row.insertCell(3);
    var dokterSelect = createDokterSelect();
    namaDokterCell.appendChild(dokterSelect);
  
    var checkboxCell = row.insertCell(4);
    checkboxCell.innerHTML = '<input type="checkbox">';
  
    var aksiCell = row.insertCell(5);
    aksiCell.innerHTML = '<button onclick="hapusJadwal(this)">Hapus</button>';
  }
  
  function createDokterSelect() {
    var select = document.createElement("select");
    select.className = "namaDokter";
    
    for (var i = 0; i < dokterOptions.length; i++) {
      var option = document.createElement("option");
      option.value = dokterOptions[i];
      option.text = dokterOptions[i];
      select.appendChild(option);
    }
    
    return select;
  }
  
  function hapusJadwal(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  function konfirmasiPenjadwalan() {
    var jadwalTable = document.getElementById("jadwalTable");
    var jadwalRows = jadwalTable.getElementsByTagName("tr");
    
    var jadwalTervalidasi = [];
    
    for (var i = 1; i < jadwalRows.length; i++) {
      var row = jadwalRows[i];
      var checkbox = row.querySelector("input[type=checkbox]");
      
      if (checkbox.checked) {
        var tanggal = row.querySelector(".tanggal").value;
        var jamMulai = row.querySelector(".jamMulai").value;
        var jamSelesai = row.querySelector(".jamSelesai").value;
        var namaDokter = row.querySelector(".namaDokter").value;
        
        jadwalTervalidasi.push({
          tanggal: tanggal,
          jamMulai: jamMulai,
          jamSelesai: jamSelesai,
          namaDokter: namaDokter
        });
      }
    }
    
    // Kirim jadwal yang tervalidasi ke halaman selanjutnya
    console.log(jadwalTervalidasi);
    
    // Reset form
    jadwalTable.innerHTML = `
      <tr>
        <th>Tanggal</th>
        <th>Jam Mulai</th>
        <th>Jam Selesai</th>
        <th>Nama Dokter</th>
        <th>Checkbox</th>
        <th>Aksi</th>
      </tr>
      <tr>
        <td><input type="date" class="tanggal"></td>
        <td><input type="time" class="jamMulai"></td>
        <td><input type="time" class="jamSelesai"></td>
        <td>
          <select class="namaDokter">
            <option value="Dr. John Doe">Dr. John Doe</option>
            <option value="Dr. Jane Smith">Dr. Jane Smith</option>
            <option value="Dr. Michael Johnson">Dr. Michael Johnson</option>
          </select>
        </td>
        <td><input type="checkbox"></td>
        <td><button onclick="hapusJadwal(this)">Hapus</button></td>
      </tr>
    `;
  }
  