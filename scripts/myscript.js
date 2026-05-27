// Sepetteki ürün sayısını tutacak değişken
let sepetMiktari = 0;

// Sepete ekle butonlarına basıldığında çalışacak fonksiyon
function sepeteEkle(urunAdi) {
    // Sayacı 1 artır
    sepetMiktari++;
    
    // HTML'deki sayacı bul ve yeni değeri yazdır
    document.getElementById("sepet-sayaci").innerText = sepetMiktari;
    
    // Kullanıcıya bilgi ver
    alert(urunAdi + " sepetinize eklendi!");
}