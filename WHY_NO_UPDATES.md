# ⚠️ ÖNEMLİ: SİTENİZ NEDEN GÜNCELLENMİYOR?

## 🔴 SORUN

Değişiklikleriniz **henüz yayında değil** çünkü Pull Request merge edilmedi!

```
┌─────────────────────────────────────────────────────────────────┐
│                    ŞU ANKİ DURUM                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📂 copilot/update-online-fast-food-menu branch                │
│  ├── ✅ .github/workflows/deploy.yml                           │
│  ├── ✅ DEPLOYMENT.md                                          │
│  ├── ✅ QUICK_GUIDE.md                                         │
│  └── ✅ Diğer dosyalar                                         │
│                                                                 │
│  ❌ main branch (BOŞŞ - Dosyalar yok!)                         │
│  └── Sadece eski dosyalar var                                  │
│                                                                 │
│  🌐 https://airf-ai.github.io/online-fast-food-menu/          │
│  └── ❌ GÜNCELLENMEDİ (main branch'den deploy olur)           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## ✅ ÇÖZÜM

### 1️⃣ Pull Request'i Merge Edin

**LİNK**: https://github.com/airf-ai/online-fast-food-menu/pull/2

```
┌──────────────────────────────────────────────┐
│  Pull Request #2                             │
│  ┌──────────────────────────────────────┐   │
│  │  [Merge pull request]  ← TIKLA!     │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  Sonra:                                      │
│  ┌──────────────────────────────────────┐   │
│  │  [Confirm merge]       ← TIKLA!     │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

### 2️⃣ GitHub Pages'i Yapılandır

**LİNK**: https://github.com/airf-ai/online-fast-food-menu/settings/pages

```
┌──────────────────────────────────────────────┐
│  GitHub Pages Settings                       │
│  ┌──────────────────────────────────────┐   │
│  │  Source: [GitHub Actions ▼]         │   │  ← BUNU SEÇ!
│  └──────────────────────────────────────┘   │
│                                              │
│  [ Save ] ← TIKLA!                          │
└──────────────────────────────────────────────┘
```

### 3️⃣ Deployment'ı İzle

**LİNK**: https://github.com/airf-ai/online-fast-food-menu/actions

```
┌──────────────────────────────────────────────┐
│  Actions                                     │
│  ┌──────────────────────────────────────┐   │
│  │  🟡 Deploy to GitHub Pages           │   │  ← BEKLE
│  │     Running... (1-2 dakika)          │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  Başarılı olunca:                           │
│  ┌──────────────────────────────────────┐   │
│  │  ✅ Deploy to GitHub Pages           │   │  ← TAMAMLANDI!
│  │     Completed                         │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

### 4️⃣ Sitenizi Kontrol Et

**LİNK**: https://airf-ai.github.io/online-fast-food-menu/

```
┌──────────────────────────────────────────────┐
│  🌐 Online Fast Food Menü                   │
│  ┌──────────────────────────────────────┐   │
│  │  ✅ Site açılıyor!                   │   │
│  │  ✅ Menü görünüyor!                  │   │
│  │  ✅ Tüm kategoriler çalışıyor!       │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

## 📊 SÜREÇ AKIŞI

```
ADIM 1                    ADIM 2                    ADIM 3
───────                   ───────                   ───────
Merge PR                  GitHub Actions            Site Güncellendi
   │                         Çalışır                     │
   │                            │                        │
   ▼                            ▼                        ▼
┌──────┐                  ┌──────────┐             ┌──────────┐
│ main │  ──────────────> │ Deploy   │  ────────>  │ 🌐 Live  │
│branch│  (otomatik)      │ Workflow │  (1-2 dk)   │   Site   │
└──────┘                  └──────────┘             └──────────┘
```

## ⏱️ ZAMAN ÇİZELGESİ

```
T+0:00    Merge butonuna tıkla
T+0:01    ✅ Merge tamamlandı
T+0:02    🟡 GitHub Actions başladı
T+0:30    🟡 Deployment devam ediyor...
T+1:30    🟡 Deployment bitmek üzere...
T+2:00    ✅ Deployment tamamlandı!
T+2:05    🌐 Siteniz yayında!
```

## 🎯 HANGİ BUTONA TIKLAMAM GEREK?

### GitHub'da:

1. **Pull Request sayfası**: `Merge pull request` butonu (YEŞİL)
2. **Confirm**: `Confirm merge` butonu (YEŞİL)
3. **Settings > Pages**: Source dropdown → `GitHub Actions` seç
4. **Settings > Pages**: `Save` butonu

## ❓ SORU & CEVAP

**S: Neden hemen güncellenmiyor?**
C: Çünkü değişiklikler henüz main branch'de değil. Merge gerekli.

**S: Pull Request nedir?**
C: Değişikliklerinizin main branch'e eklenmesi için bir talep.

**S: Merge ne demek?**
C: Değişiklikleri main branch'e birleştirmek (eklemek).

**S: Merge sonrası ne olacak?**
C: GitHub Actions otomatik çalışıp sitenizi 1-2 dakikada yayına alacak.

**S: Merge'yi kim yapabilir?**
C: Repository sahibi veya yazma yetkisi olan kullanıcılar.

## 🚨 ACİL YARDIM

### Hemen yapmanız gerekenler:

1. ✅ Bu dosyayı okuyun (bitti!)
2. ⏭️ https://github.com/airf-ai/online-fast-food-menu/pull/2 adresine git
3. ⏭️ "Merge pull request" butonuna tıkla
4. ⏭️ "Confirm merge" butonuna tıkla
5. ⏭️ Settings > Pages > Source: "GitHub Actions" seç
6. ⏭️ 2 dakika bekle
7. ⏭️ https://airf-ai.github.io/online-fast-food-menu/ adresini aç

## 📚 DETAYLI BİLGİ

- **Sorun giderme**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Deployment rehberi**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Hızlı kılavuz**: [QUICK_GUIDE.md](QUICK_GUIDE.md)

---

**⚡ HIZLI ÖZET**: Pull Request'i merge et → GitHub Pages'i ayarla → 2 dakika bekle → Site yayında!
