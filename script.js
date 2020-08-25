// acak pilihan computer
$('.submit').click(function() {
        // alert("submit ok")
        var comp = Math.random()

        if( comp < 0.1) {
            comp = '1'
        }else if( comp >= 0.1 && comp < 0.2 ) {
            comp = '2'
        }else if( comp >= 0.2 && comp < 0.3 ) {
            comp = '3'
        }else if( comp >= 0.3 && comp < 0.4 ) {
            comp = '4'
        }else if( comp >= 0.4 && comp < 0.5 ) {
            comp = '5'
        }else if( comp >= 0.5 && comp < 0.6 ) {
            comp = '6'
        }else if( comp >= 0.6 && comp < 0.7 ) {
            comp = '7'
        }else if( comp >= 0.7 && comp < 0.8 ) {
            comp = '8'
        }else if( comp >= 0.8 && comp < 0.9 ) {
            comp = '9'
        }else {
            comp = '10'
        }
        var user = document.getElementById('input').value
        console.log(comp)
    
        if (user == comp) {
            document.getElementById('hasil').innerHTML = '<p class="hasil">Selamat anda<br>Benar</p>'
            document.getElementById('comp').innerHTML = `<p class="pilihancomp">${comp}</p>`
        }else if (user < comp) {
            document.getElementById('hasil').innerHTML = '<p class="hasil">Angka yang anda masukan <br> terlalu Kecil</p>'
            document.getElementById('comp').innerHTML = `<p class="pilihancomp">${comp}</p>`
        }else if (user > comp) {
            document.getElementById('hasil').innerHTML = '<p class="hasil">Angka yang anda masukan <br> terlalu Besar</p>'
            document.getElementById('comp').innerHTML = `<p class="pilihancomp">${comp}</p>`
        }else {
            document.getElementById('hasil').innerHTML = '<p class="hasil">Yang anda masukan<br>Bukan angka</p>'
        }
    })

$('.ulang').click(function(){
    window.location.reload(true)
    })
     