# Sitenizi Nasıl Güncellersiniz? 🚀

Bu doküman, online fast food menü sitenizde yaptığınız güncellemeleri yayına almanız için adım adım rehberdir.

---

## ⚠️ SİTENİZ GÜNCELLENMİYOR MU?

Değişiklikler göremiyorsanız, Pull Request'in merge edilmesi gerekiyor olabilir!

**👉 [Hızlı Çözüm için buraya tıklayın](WHY_NO_UPDATES.md)**

---

## Yöntem 1: Otomatik Deployment (Tavsiye Edilen) ✅

GitHub Pages otomatik deployment yapılandırıldı. Artık değişikliklerinizi `main` branch'ine gönderdiğinizde siteniz otomatik olarak güncellenecek.

### Adımlar:

1. **GitHub Pages'i Aktifleştirin** (Sadece İlk Seferde)
   - GitHub repository'nize gidin: https://github.com/airf-ai/online-fast-food-menu
   - `Settings` (Ayarlar) > `Pages` bölümüne tıklayın
   - `Source` (Kaynak) altında `GitHub Actions` seçeneğini seçin
   - Kaydedin

2. **Değişikliklerinizi Yapın**
   - `index.html` dosyasında fiyat güncellemesi
   - Yeni ürün ekleme
   - Fotoğraf değiştirme
   - vb.

3. **Değişiklikleri GitHub'a Gönderin**
   ```bash
   git add .
   git commit -m "Menü güncellendi"
   git push origin main
   ```

4. **Otomatik Deployment**
   - Push işlemi sonrası GitHub Actions otomatik olarak çalışacak
   - 1-2 dakika içinde değişiklikler yayına alınacak
   - `Actions` sekmesinden deployment durumunu takip edebilirsiniz

5. **Sitenizi Kontrol Edin**
   - Siteniz şu adreste yayında olacak:
   - `https://airf-ai.github.io/online-fast-food-menu/`

## Yöntem 2: Manuel Deployment (Alternatif)

Eğer otomatik deployment kullanmak istemezseniz:

1. Repository Settings > Pages
2. Source: `Deploy from a branch` seçin
3. Branch: `main` / `/(root)` seçin
4. Save butonuna tıklayın

## Sık Yapılan Güncellemeler 📝

### Fiyat Güncelleme
1. `index.html` dosyasını açın
2. İlgili ürünün `<p class="menu-item-price">` etiketini bulun
3. Fiyatı güncelleyin
4. Değişiklikleri commit ve push edin

Örnek:
```html
<p class="menu-item-price">150 TL</p>
```

### Yeni Ürün Ekleme
1. `index.html` dosyasında ilgili kategoriye gidin
2. Mevcut bir `<article class="menu-item">` bloğunu kopyalayın
3. Ürün bilgilerini güncelleyin
4. Ürün fotoğrafını projeye ekleyin
5. Değişiklikleri commit ve push edin

### Fotoğraf Güncelleme
1. Yeni fotoğrafı `URUN ÖN PLANDA` klasörüne ekleyin (yüksek öncelikli ürünler için)
   VEYA kök dizine ekleyin (normal ürünler için)
2. `index.html` dosyasında `<img src="...">` etiketini güncelleyin
3. Değişiklikleri commit ve push edin

## Önemli Notlar ⚠️

- **Dosya İsimleri**: Türkçe karakter içeren dosya isimlerinde sorun yaşanabilir. İngilizce karakterler kullanmanız önerilir.
- **Fotoğraf Formatı**: PNG veya JPG kullanın
- **Fotoğraf Boyutu**: Mobil uyumluluk için görselleri optimize edin (max 500KB önerilir)
- **Cache**: Tarayıcı cache'i nedeniyle değişiklikler hemen görünmeyebilir. Hard refresh (Ctrl+F5) yapın.

## Yardım ve Destek 💬

Sorun yaşarsanız:
1. `Actions` sekmesinde deployment loglarını kontrol edin
2. Hata mesajlarını okuyun
3. GitHub Issues bölümünde yeni bir issue açın

## Test Etme 🧪

Değişiklikleri yayınlamadan önce:
1. `index.html` dosyasını yerel olarak tarayıcıda açın
2. Görünümü kontrol edin
3. Tüm linklerin ve görsellerin çalıştığını doğrulayın
4. Mobil görünümü test edin (tarayıcı geliştirici araçları ile)

---

**Son Güncelleme**: 2026-02-17
