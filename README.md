# Online Fast Food - QR Menü

Restoran menüsü için QR kod ile erişilebilen modern ve responsive web sitesi.

## Özellikler

- 📱 Mobil uyumlu tasarım
- 🎯 Kampanya bölümü
- 🍗 Izgara Lezzetleri
- 🥖 Sokak Lezzetleri
- 🥪 Tostlar
- 🍟 Aperatifler
- 🥤 İçecekler
- ⭐ Çok Sevilenler ve Yeni ürün etiketleri
- 🔄 Logo tıklama ile sayfa yenileme

## Teknolojiler

- HTML5
- CSS3
- JavaScript (Vanilla)

## Sitenizi Güncelleme ve Yayınlama 🚀

📖 **Detaylı deployment rehberi**: [DEPLOYMENT.md](DEPLOYMENT.md)  
⚡ **Hızlı güncelleme örnekleri**: [QUICK_GUIDE.md](QUICK_GUIDE.md)

### Hızlı Başlangıç

1. Bu repository GitHub'da zaten yapılandırılmış
2. Repository Settings > Pages > Source: `GitHub Actions` seçin (sadece ilk seferde)
3. Değişikliklerinizi yapın (fiyat, ürün, fotoğraf vb.)
4. Değişiklikleri main branch'e push edin:
   ```bash
   git add .
   git commit -m "Menü güncellendi"
   git push origin main
   ```
5. GitHub Actions otomatik olarak sitenizi yayına alacak
6. Site adresi: `https://airf-ai.github.io/online-fast-food-menu/`

## Kullanım

1. Tüm dosyaları bir klasöre koyun
2. `index.html` dosyasını tarayıcıda açın veya GitHub Pages'de yayınlayın
3. QR kod oluşturucu ile `index.html` sayfasının URL'sini QR koda çevirin
4. QR kodu müşterileriniz okutabilir

## Dosya Yapısı

```
├── index.html          # Ana HTML dosyası
├── style.css           # Stil dosyası
├── script.js           # JavaScript dosyası
├── online_fast_food_logo.png  # Logo
├── URUN ÖN PLANDA/     # Öncelikli ürün görselleri
└── [diğer görseller]   # Ürün görselleri
```

## Notlar

- Görseller "URUN ÖN PLANDA" klasöründe önceliklidir
- Eğer görsel bulunamazsa ana klasördeki görsel kullanılır
- Tüm görseller PNG veya JPG formatında olmalıdır
