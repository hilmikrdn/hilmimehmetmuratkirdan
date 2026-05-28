let sepetMiktari = 0;
let gizliSifre = Math.floor(Math.random() * 10) + 1;

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. SEPETE EKLEME İŞLEMLERİ ---
    const sepeteEkleButonlari = document.querySelectorAll(".sepete-ekle-btn");
    
    sepeteEkleButonlari.forEach(function(buton) {
        buton.addEventListener("click", function() {
            sepetMiktari++;
            document.getElementById("sepet-sayaci").innerText = sepetMiktari;
            
            
            let urunAdi = this.getAttribute("data-urun");
            alert(urunAdi + " sepetinize eklendi!");
        });
    });

    // --- 2. SİBER ŞİFRE KIRICI OYUNU KISMI ---
    const oyunButonu = document.getElementById("oyunDeneBtn");
    
    
    if (oyunButonu) {
        oyunButonu.addEventListener("click", function() {
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
                gizliSifre = Math.floor(Math.random() * 10) + 1; 
            } 
            else if (kullaniciTahmini > gizliSifre) {
                sonucMesaji.innerHTML = "Yanlış! Daha KÜÇÜK bir sayı denemelisin.";
                sonucMesaji.style.color = "#e74c3c"; 
            } 
            else {
                sonucMesaji.innerHTML = "Yanlış! Daha BÜYÜK bir sayı denemelisin.";
                sonucMesaji.style.color = "#e74c3c"; 
            }
        });
    }
});