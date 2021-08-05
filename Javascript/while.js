// PENGULANGAN
var ngulang = true;
while(ngulang){
    console.log('hello world');  //tampil di consolo
    ngulang = confirm('ualng lagi?');  //menanyakan Oke/cancel jika Oke akan terus berulang
}


//variabel hello world akan muncul sebanyak nilai yang ingin di tampilkan  
var nilaiAwal = 1;
while(nilaiAwal <= 11){     //nilai yang ingin di tampilkan 
    console.log('Hello world! ' + nilaiAwal + 'x');
    nilaiAwal++;
}
