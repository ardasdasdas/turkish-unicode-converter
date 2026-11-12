<p align="center">
  <img src="assets/logo.svg" width="96" alt="Türkçe ⇄ Unicode logosu">
</p>

<h1 align="center">Türkçe ⇄ Unicode</h1>

<p align="center">
  Türkçe karakterleri <code>\u011f</code> gibi Unicode kaçışlarına çeviren (ve geri alan) Chrome eklentisi.<br>
  <a href="https://ardasdasdas.github.io/turkish-unicode-converter/"><b>Web sürümünü dene →</b></a>
</p>

## Özellikler

- `ğ Ğ ı İ ö Ö ü Ü ş Ş ç Ç` → `\u011f \u011e \u0131 ...` ve tersi
- İsteğe bağlı: noktalama / özel karakterleri de dönüştür, istediğin karakterleri hariç tut
- Sonucu tek tıkla kopyala
- Açık / koyu tema desteği
- Hiçbir izin istemez, hiçbir sayfaya script enjekte etmez, veri göndermez

## Örnek

| Girdi | Çıktı |
|-------|-------|
| `Çalışkan öğrenci` | `\u00c7al\u0131\u015fkan \u00f6\u011frenci` |

## Chrome'a kurulum

1. Bu repoyu klonla veya ZIP olarak indirip aç.
2. `chrome://extensions/` adresine git, **Geliştirici modu**nu aç.
3. **Paketlenmemiş öğe yükle** de ve `extension/` klasörünü seç.

## Proje yapısı

```
extension/   Chrome eklentisi (manifest, popup, converter.js)
index.html   GitHub Pages web sürümü (aynı converter.js'i kullanır)
assets/      Logo, web sitesi stili (site.css) ve betiği (site.js)
tools/       Logo/ikon üretme betiği
```

## Lisans

[MIT](LICENSE) © Arda Uslu
