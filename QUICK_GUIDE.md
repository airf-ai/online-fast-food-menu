# Hızlı Güncelleme Rehberi ⚡

## 📋 Sık Yapılan İşlemler

### 1. Fiyat Güncelleme

**index.html** dosyasında:
```html
<!-- ÖNCESİ -->
<p class="menu-item-price">150 TL</p>

<!-- SONRASI -->
<p class="menu-item-price">180 TL</p>
```

### 2. Kampanya Fiyatı Güncelleme

**index.html** dosyasında:
```html
<!-- ÖNCESİ -->
<p class="campaign-price">160 TL</p>

<!-- SONRASI -->
<p class="campaign-price">175 TL</p>
```

### 3. Yeni Ürün Ekleme

1. Ürün fotoğrafını ekleyin:
   - Öncelikli ürünler için: `URUN ÖN PLANDA/` klasörüne
   - Normal ürünler için: Ana dizine

2. **index.html** dosyasında ilgili kategoriye ekleyin:
```html
<article class="menu-item">
  <div class="menu-item-image">
    <!-- İsterseniz rozet ekleyin -->
    <span class="product-badge badge-new">Yeni</span>
    <img src="urun-fotografi.jpg" alt="Ürün Adı" />
  </div>
  <div class="menu-item-info">
    <h4 class="menu-item-name">Ürün Adı</h4>
    <p class="menu-item-price">100 TL</p>
    <p class="menu-item-description">Ürün açıklaması</p>
  </div>
</article>
```

### 4. Ürün Rozetleri

**Yeni Ürün** için:
```html
<span class="product-badge badge-new">Yeni</span>
```

**Çok Satılan** için:
```html
<span class="product-badge badge-popular">Çok Sevilenler</span>
```

### 5. Kampanya Ekleme

**index.html** dosyasında `id="cat-campaign"` bölümüne:
```html
<div class="campaign-item">
  <h3 class="campaign-title">KAMPANYA ADI</h3>
  <div class="campaign-combo">
    <div class="combo-image">
      <img src="urun1.jpg" alt="Ürün 1" />
    </div>
    <div class="combo-image">
      <img src="urun2.jpg" alt="Ürün 2" />
    </div>
  </div>
  <p class="campaign-price">150 TL</p>
  <p class="campaign-description">Ürün 1 + Ürün 2</p>
</div>
```

### 6. Ürün Açıklaması Güncelleme

**index.html** dosyasında:
```html
<!-- ÖNCESİ -->
<p class="menu-item-description">Eski açıklama</p>

<!-- SONRASI -->
<p class="menu-item-description">Yeni açıklama</p>
```

## 🔄 Değişiklikleri Yayına Alma

Her değişiklikten sonra:

```bash
# Tüm değişiklikleri ekle
git add .

# Değişikliği kaydet
git commit -m "Açıklama: Örn. Fiyatlar güncellendi"

# GitHub'a gönder (otomatik deployment başlar)
git push origin main
```

## ⏱️ Deployment Süresi

- Değişiklikler push edildikten sonra **1-2 dakika** içinde yayına alınır
- GitHub repository'nizde **Actions** sekmesinden durumu takip edebilirsiniz

## 🌐 Site Adresi

Siteniz bu adreste yayında:
```
https://airf-ai.github.io/online-fast-food-menu/
```

## 📱 QR Kod Oluşturma

1. https://www.qr-code-generator.com/ veya benzeri bir site kullanın
2. Site adresinizi girin
3. QR kodu indirin
4. Restoranınızda masalara koyun

## ⚠️ Dikkat Edilecekler

- ✅ Fotoğraf dosya isimleri İngilizce karakterlerle olmalı
- ✅ Fotoğraflar 500KB'dan küçük olmalı (performans için)
- ✅ PNG veya JPG formatı kullanın
- ✅ Değişiklik sonrası tarayıcı cache'ini temizleyin (Ctrl+F5)
- ✅ Mobil görünümü test edin

## 🆘 Sorun mu Yaşıyorsunuz?

1. **Actions** sekmesinde deployment loglarını kontrol edin
2. Hata varsa kırmızı X işaretine tıklayın ve logları okuyun
3. [DEPLOYMENT.md](DEPLOYMENT.md) dosyasını okuyun
4. GitHub Issues'da yeni bir konu açın

---
**İpucu**: Büyük değişiklikler yapmadan önce dosyaların yedeğini alın!
