// Sayfa yüklendiğinde scroll pozisyonunu sıfırla
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Sayfa yüklendiğinde en üste kaydır
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

document.addEventListener("DOMContentLoaded", () => {
  // Sayfa yüklendiğinde en üste kaydır
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Logo tıklama - sayfayı yenile
  const logoImage = document.querySelector(".logo-image");
  if (logoImage) {
    logoImage.addEventListener("click", () => {
      window.location.reload();
    });
  }
  
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const categoryPanels = document.querySelectorAll(".category-panel");
  const currentCategoryTitle = document.getElementById("current-category");

  const categoryNames = {
    "cat-campaign": "Kampanya",
    "cat-grill": "Izgara Lezzetleri",
    "cat-toast": "Tostlar",
    "cat-street": "Sokak Lezzetleri",
    "cat-snack": "Aperatifler",
    "cat-drink": "İçecekler"
  };

  // Görsel dosya adı eşleştirmeleri (ürün ön planda klasöründeki dosya adları)
  const imageMapping = {
    "ızgara tavuk.jpeg": "IZGARA TAVUK.jpg",
    "yarm incik.jpeg": "TAVUK İNCİK.jpg",
    "tam kumru.jpeg": "TAM KUMRU.jpg",
    "patso.jpeg": "PATSO TAM.jpg",
    "bomba tost.jpeg": "BOMBA TOST.jpg",
    "gözleme.jpeg": "GÖZLEME.jpg"
  };

  // Görselleri yükle - önce "product-images" klasöründe kontrol et
  function loadImageWithFallback(img) {
    const originalSrc = img.getAttribute("src");
    if (!originalSrc) return;

    // Eğer zaten "product-images" klasöründen yükleniyorsa veya içecek görseliyse atla
    if (originalSrc.includes("product-images") || 
        originalSrc.includes(".png") || 
        originalSrc.includes("online_fast_food_logo")) {
      return;
    }

    // Dosya adı eşleştirmesini kontrol et
    const mappedName = imageMapping[originalSrc];
    if (mappedName) {
      const priorityPath = `product-images/${mappedName}`;
      const testImg = new Image();
      
      testImg.onload = function() {
        img.src = priorityPath;
      };
      
      testImg.onerror = function() {
        // "product-images" klasöründe yoksa, orijinal görseli kullan
        img.src = originalSrc;
      };
      
      testImg.src = priorityPath;
    }
  }

  // Tüm görselleri kontrol et
  const allImages = document.querySelectorAll("img");
  allImages.forEach(loadImageWithFallback);

  // Sidebar item tıklama
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.dataset.target;

      // Aktif sidebar item'ı güncelle
      sidebarItems.forEach((si) => si.classList.remove("active"));
      item.classList.add("active");

      // Kategori panelini göster/gizle
      categoryPanels.forEach((panel) => {
        panel.classList.toggle("category-active", panel.id === target);
      });

      // Kategori başlığını güncelle
      if (currentCategoryTitle && categoryNames[target]) {
        currentCategoryTitle.textContent = categoryNames[target];
      }

      // Kategori değiştiğinde sayfa başına kaydır
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
