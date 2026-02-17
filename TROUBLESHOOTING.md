# 🔧 Siteniz Neden Güncellenmiyor? - Sorun Giderme

## ❗ SORUN TESPİTİ

Sitenizde güncelleme görünmemesinin nedeni: **Değişiklikler henüz `main` branch'e merge edilmedi!**

### 📊 Mevcut Durum:

- ✅ Deployment dosyaları oluşturuldu
- ✅ Dokümantasyon hazırlandı
- ⚠️ **Değişiklikler `copilot/update-online-fast-food-menu` branch'inde**
- ❌ **`main` branch'e henüz merge edilmedi**
- ❌ **GitHub Actions çalışmadı (çünkü main'de değişiklik yok)**

## 🎯 ÇÖZüM: Pull Request'i Merge Edin

Sitenizin güncellenmesi için Pull Request'i (PR) main branch'e merge etmeniz gerekiyor.

### ADIM ADIM ÇÖZÜM:

#### ADIM 1: Pull Request Sayfasına Git
```
https://github.com/airf-ai/online-fast-food-menu/pull/2
```

#### ADIM 2: Merge Pull Request
1. "Merge pull request" butonuna tıklayın (yeşil buton)
2. "Confirm merge" butonuna tıklayın
3. Merge işlemi tamamlanacak

#### ADIM 3: GitHub Pages'i Yapılandır (İlk Seferde)
1. Repository Settings'e git: https://github.com/airf-ai/online-fast-food-menu/settings/pages
2. **"Source"** bölümünde **"GitHub Actions"** seçin
3. Save butonuna tıklayın

#### ADIM 4: Deployment'ı İzle
1. Actions sekmesine git: https://github.com/airf-ai/online-fast-food-menu/actions
2. "Deploy to GitHub Pages" workflow'unu göreceksiniz
3. Yeşil ✅ işareti gelene kadar bekleyin (1-2 dakika)

#### ADIM 5: Sitenizi Kontrol Et
```
https://airf-ai.github.io/online-fast-food-menu/
```

## 📋 NEDEN BU OLDU?

GitHub Actions deployment workflow'u şu şekilde çalışır:

```
Değişiklik yap → main branch'e push et → GitHub Actions çalışır → Site güncellenir
```

**Şu anda:**
```
✅ Değişiklik yapıldı (copilot branch'inde)
❌ main branch'e push edilmedi (merge bekleniyor)
❌ GitHub Actions çalışmadı
❌ Site güncellenmedi
```

**Merge sonrası olacaklar:**
```
✅ PR merge edilir → main branch güncellenir
✅ GitHub Actions otomatik çalışır
✅ Site 1-2 dakika içinde güncellenir
✅ https://airf-ai.github.io/online-fast-food-menu/ yayına alınır
```

## 🔍 KONTROL LİSTESİ

Merge işleminden önce:
- [ ] Pull Request #2 açık mı? → https://github.com/airf-ai/online-fast-food-menu/pulls
- [ ] Değişiklikleri gözden geçirdiniz mi?
- [ ] Deployment dosyalarını onaylıyor musunuz?

Merge işleminden sonra:
- [ ] GitHub Pages Source: "GitHub Actions" olarak ayarlandı mı?
- [ ] Actions sekmesinde workflow çalışıyor mu?
- [ ] Deployment başarılı oldu mu? (Yeşil ✅)
- [ ] Site açılıyor mu? (https://airf-ai.github.io/online-fast-food-menu/)

## ⏱️ BEKLENTİLER

- **Merge süresi**: Anında (1-2 saniye)
- **Deployment süresi**: 1-2 dakika
- **Toplam süre**: ~2-3 dakika içinde siteniz yayında olacak

## 🔄 SONRAKI GÜNCELLEMELER

Merge işlemi tamamlandıktan sonra, gelecekteki güncellemeler için:

```bash
# Dosyalarınızı düzenleyin (index.html, fiyatlar vb.)
git add .
git commit -m "Fiyatlar güncellendi"
git push origin main

# 1-2 dakika bekleyin → Siteniz otomatik güncellenecek!
```

## 🆘 HÂLÂ SORUN MU VAR?

### Sorun 1: Merge butonu görünmüyor
**Çözüm**: Repository'ye yazma yetkisi olduğunuzdan emin olun

### Sorun 2: Merge sonrası Actions çalışmıyor
**Çözüm**: 
1. Settings > Pages > Source: "GitHub Actions" olduğundan emin olun
2. Actions sekmesinde "Enable workflows" butonuna tıklayın

### Sorun 3: Deployment başarısız (Kırmızı X)
**Çözüm**: 
1. Actions sekmesinde başarısız workflow'a tıklayın
2. Loglara bakın
3. Hata mesajını paylaşın

### Sorun 4: Site açılmıyor (404 hatası)
**Çözüm**:
1. Settings > Pages bölümünde "Your site is live at..." mesajını kontrol edin
2. Birkaç dakika daha bekleyin (ilk deployment 5-10 dakika sürebilir)
3. Tarayıcı cache'ini temizleyin (Ctrl+F5)

## 📞 DESTEK

Merge işlemini tamamladıktan sonra hala sorun yaşıyorsanız:
1. Actions sekmesindeki hata loglarını kontrol edin
2. Ekran görüntüleri alın
3. GitHub Issues'da yeni bir konu açın

---

**ÖNEMLİ**: Bu dosyayı okuduktan sonra yukarıdaki adımları izleyin. Merge işlemi olmadan siteniz güncellenemez!

**Son Güncelleme**: 2026-02-17
