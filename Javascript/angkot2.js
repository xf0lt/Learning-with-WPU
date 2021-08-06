var jmlAngkot = 10;
var angkotberjalan = 5;
var angkot = 1;

while(angkot <= angkotberjalan) {
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
angkot++;
}

for( angkot = angkotberjalan + 1; angkot <= jmlAngkot; angkot++) {
    console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
}