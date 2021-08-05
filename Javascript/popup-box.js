// JIKA ALERT LEBIH DARI SATU MAKA BROWSER AKAN MENANYAKAN INGIN DI TAMPILKAN LAGI ATU TIDAK
// ###############
//alert('halo');
//alert('nama');
//alert('saya');
//alert('iswan');

// prompt berfungsi menampilkan kolom di alert
// #############################################
//var nama = prompt('masukan nama');
//alert(nama);

// CONFIRM
alert('selamat datang');

var ulanglagi = true;
while( ulanglagi ){
    var nama = prompt('masukan nama:');
    alert('halo ' + nama);
    
    ulanglagi = confirm('coba lagi?');
}
alert('terima kasih');

/* 
var tes = confirm('kamu yakin ingin lanjut?');
if(tes == true){
    alert('user menekan Ok!');
} else {
    alert('user menekan CANCEL!!');
} 
*/