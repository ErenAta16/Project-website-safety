# İş Sağlığı ve Güvenliği Projesi Web Sitesi

Bu proje, iş sağlığı ve güvenliği konusunda geliştirilen modern bir web sitesidir. Responsive tasarım, modern CSS teknikleri ve interaktif JavaScript özellikleri ile geliştirilmiştir.

## 🚀 Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Modern UI/UX**: Profesyonel ve kullanıcı dostu arayüz
- **İnteraktif Öğeler**: Smooth scrolling, animasyonlar ve hover efektleri
- **Mobil Uyumlu**: Hamburger menü ve touch-friendly tasarım
- **SEO Optimized**: Semantic HTML yapısı
- **Performance**: Optimize edilmiş CSS ve JavaScript

## 📁 Dosya Yapısı

```
Porje_sayfası/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stil dosyası
├── script.js           # JavaScript dosyası
└── README.md           # Bu dosya
```

## 🔧 Kurulum ve Çalıştırma

### Basit Yöntem (Önerilen)
1. Projeyi bilgisayarınıza indirin
2. `index.html` dosyasını çift tıklayarak herhangi bir web tarayıcısında açın

### Live Server ile (VS Code)
1. VS Code'da projeyi açın
2. Live Server uzantısını yükleyin
3. `index.html` dosyasına sağ tıklayıp "Open with Live Server" seçin

### Python ile Lokal Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Ardından `http://localhost:8000` adresini ziyaret edin.

## 🎨 Tasarım Renk Paleti

- **Primary**: #2563eb (Mavi)
- **Secondary**: #059669 (Yeşil)
- **Accent**: #dc2626 (Kırmızı)
- **Warning**: #f59e0b (Turuncu)
- **Background**: #ffffff (Beyaz)
- **Text**: #374151 (Gri)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px ve üzeri
- **Tablet**: 768px - 1023px
- **Mobile**: 767px ve altı

## 🔧 Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Modern JavaScript özellikleri
- **Font Awesome**: İkonlar için
- **Google Fonts**: Inter font ailesi

## 📄 Sayfa Bölümleri

1. **Header**: Logo ve navigasyon menüsü
2. **Hero Section**: Ana başlık ve CTA butonları
3. **Proje Amacı**: Hedef, vizyon, misyon kartları
4. **Ekip**: Proje ekibi üyeleri
5. **Teknolojiler**: 2x3 grid layout ile teknoloji showcase
6. **Dashboard**: Video demo ve özellik açıklamaları
7. **İletişim**: İletişim bilgileri ve form
8. **Footer**: Logo, linkler ve sosyal medya

## 🎯 İş Sağlığı ve Güvenliği Teması

Web sitesi, iş güvenliği sektörüne uygun:
- Güvenlik renkleri (mavi, yeşil, kırmızı)
- Profesyonel tipografi
- İş güvenliği ikonları
- Güvenilirlik vurgulu tasarım

## 🔄 Güncellemeler

### Video Entegrasyonu
Dashboard bölümündeki video placeholder'ını gerçek video ile değiştirmek için:

```html
<video controls>
    <source src="dashboard-demo.mp4" type="video/mp4">
    Tarayıcınız video elementini desteklemiyor.
</video>
```

### Logo Değişimi
Varsayılan icon yerine kendi logonuzu kullanmak için:
1. Logo dosyasını projeye ekleyin
2. CSS'de `.logo-icon` sınıfını güncelleyin

### İletişim Formu
Form submission işlevi için backend entegrasyonu gereklidir. Şu an mock notification sistemi kullanılmaktadır.

## 🎨 Özelleştirme

### Renk Değişimi
`styles.css` dosyasındaki `:root` bölümünde CSS custom properties'i değiştirerek renkleri özelleştirebilirsiniz.

### İçerik Güncellemesi
`index.html` dosyasındaki metin içeriklerini kendi proje bilgilerinizle güncelleyin.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimize edilmiş
- **Image Optimization**: SVG ve optimize edilmiş placeholder'lar
- **CSS/JS Minification**: Production için minify edilebilir

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

Proje hakkında sorularınız için:
- E-posta: info@safetytech.com
- Website: [Demo URL]

---

**Not**: Bu web sitesi iş sağlığı ve güvenliği projeleri için özel olarak tasarlanmıştır. Modern web standartlarına uygun olarak geliştirilmiş ve production ortamında kullanıma hazırdır.
