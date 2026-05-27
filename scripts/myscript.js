// --- 1. SEPETE EKLEME FONKSİYONU --- //
let sepetMiktari = 0;

function sepeteEkle(urunAdi) {
    sepetMiktari++;
    document.getElementById("sepet-sayaci").innerText = sepetMiktari;
    alert(urunAdi + " sepetinize eklendi!");
}

// --- 2. SİBER ŞİFRE KIRICI OYUNU FONKSİYONU --- //
let gizliSifre = Math.floor(Math.random() * 10) + 1;

function sifreDene() {
    let kullaniciTahmini = document.getElementById("tahminInput").value;
    let sonucMesaji = document.getElementById("oyunSonucu");

    if (kullaniciTahmini === "") {
        sonucMesaji.innerHTML = "Lütfen önce bir sayı girin!";
        sonucMesaji.style.color = "#f1c40f"; 
        return; 
    }

    if (kullaniciTahmini == gizliSifre) {
        sonucMesaji.innerHTML = "Tebrikler! Sisteme sızdınız, şifre doğru.";
        sonucMesaji.style.color = "#2ecc71"; 
        gizliSifre = Math.floor(Math.random() * 10) + 1; // Yeni oyun için şifreyi sıfırla
    } 
    else if (kullaniciTahmini > gizliSifre) {
        sonucMesaji.innerHTML = "Yanlış! Daha KÜÇÜK bir sayı denemelisin.";
        sonucMesaji.style.color = "#e74c3c"; 
    } 
    else {
        sonucMesaji.innerHTML = "Yanlış! Daha BÜYÜK bir sayı denemelisin.";
        sonucMesaji.style.color = "#e74c3c"; 
    }
}