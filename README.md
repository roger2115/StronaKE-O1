# SCiPnet Portal Operacyjny

## 🔐 Opis Projektu

Interaktywny portal Fundacji SCP prezentujący informacje o **Komitecie ds. Etyki** i **Mobilnej Formacji Operacyjnej Omega-1 ("Law's Left Hand")**. Aplikacja łączy immersyjny design z funkcjonalnością edukacyjną.

---

## 📋 Architektura Projektu

Projekt został całkowicie zoptymalizowany i zmodularyzowany:

```
StronaKE&O1/
├── index.html              # Struktura HTML (semantic, czysta)
├── styles.css              # Stylesheet (zoptymalizowany, responsive)
├── script.js               # Inicjalizacja aplikacji
├── modules/
│   ├── ui.js              # Zarządzanie nawigacją i modałami
│   ├── terminal.js        # Efekty terminala i symulacje
│   └── regulations.js     # Ładowanie wytycznych Klasy D
├── Assets/
│   ├── KElogo.png
│   ├── O1.png
│   ├── Milky_way.jpg
│   ├── spacebg.jpg
│   ├── spacefooter.png
│   └── spacehead-layer1.png
└── README.md              # Ten plik
```

---

## ✨ Główne Funkcjonalności

### 1. **System Nawigacji**
- Płynne przejścia między widokami z animacjami fade-in
- Przycisk "Powrót" na każdej podstronie
- Logo sekcji z efektem fade na nagłówkach

### 2. **Sekcja: Komitet ds. Etyki**
- **Orientacja** - Historia i rola Komitetu
- **Zarządzanie Klasą D** - Standardy i procedury
- Modal z **Wytycznymi Bytowymi** (pobierane z SCP Wiki lub fallback)
- Przycisk **"Zainicjuj Audyt"** - Symulacja audytu z terminalem

### 3. **Sekcja: Omega-1**
- **Charakterystyka Jednostki** - Struktura, rekrutacja, mandat operacyjny
- **Procedura Zgłaszania** - Pełny instruktaż zgłaszania naruszeń etycznych
- Lista **Kanałów Komunikacji Awaryjnej**
- Przycisk interaktywny z symulacją terminala

### 4. **Efekty Wizualne**
- Tło animowane (space background z blur overlay)
- Glass-morphism design z backdrop-filter
- Typewriter effect w terminalach
- Fadowane loga sekcji
- Płynne przejścia i hover effects

---

## 🎯 Kluczowe Usprawnienia

### Optymalizacja kodu:
✅ **Separacja concerns** - HTML, CSS, JS w oddzielnych plikach
✅ **Modularny JavaScript** - Moduły IIFE dla UI, Terminal, Regulacji
✅ **CSS variables** - Łatwa zmiana kolorów i stylów
✅ **Responsive design** - Mobile-first podejście
✅ **Performance** - Lazy loading, reduced motion support
✅ **Print styles** - Ukrywanie UI elementów przy drukowaniu

### Nowa zawartość:
✅ **Pełny opis Omega-1** - Z sekcjami: Rekrutacja, Mandat, Status Specjalny
✅ **Instruktaż Zgłaszania** - 5 kroków + kanały komunikacji
✅ **Wytyczne Klasy D** - Cztery kategorie regulacji (zakwaterowanie, żywienie, bezpieczeństwo, procedury)
✅ **Fadowane loga** - Na kartach wyboru i w nagłówkach sekcji

---

## 🚀 Jak Uruchomić

1. **Otwórz plik `index.html` w przeglądarce**
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

2. **Kliknij na kartę sekcji** (Komitet ds. Etyki lub Omega-1)

3. **Interaktuj z elementami:**
   - Kliknij "Pełne Wytyczne" / "Zainicjuj Audyt" na sekcji KE
   - Przeczytaj instruktaż zgłaszania na sekcji Omega-1
   - Kliknij "Zgłoś Naruszenie" / przycisk w Omega-1 (zobaczy się symulacja)

---

## 📱 Responsive Design

Strona jest w pełni responsywna:
- **Desktop** (1024px+) - Dwukolumnowy layout
- **Tablet** (768px-1024px) - Pojedyncza kolumna, zmniejszone fonty
- **Mobile** (<768px) - Kompaktny layout, karty na całą szerokość

---

## 🎨 Paleta Kolorów

```css
--y: #facc15;              /* Żółty akcent (główny kolor)        */
--y-glow: glow effect       /* Świecący efekt                     */
--bg-glass: rgba(...)       /* Półprzezroczyste tło               */
--text: #f8fafc             /* Jasny tekst                        */
--text-dim: #94a3b8         /* Przyciemniony tekst                */
```

---

## 📦 Zależności

- **Czcionki Google Fonts:**
  - `Rajdhani` - Nagłówki
  - `Share Tech Mono` - Terminale (monospace)
  - `Barlow` - Tekst główny

- **Obrazy** - Lokalne (folder `Assets/`)

---

## 🔧 Modularyzacja JavaScript

### `modules/ui.js`
```javascript
UIModule.showView(viewId)    // Zmiana widoku
UIModule.openModal(id)       // Otwarcie modału
UIModule.closeModal(id)      // Zamknięcie modału
```

### `modules/terminal.js`
```javascript
TerminalModule.typeText(elementId, lines, speed)  // Efekt typewriter
TerminalModule.runAudit()                         // Symulacja audytu
TerminalModule.deployOmega1()                     // Symulacja Omega-1
```

### `modules/regulations.js`
```javascript
RegulationsModule.loadClassDRegulations()  // Ładowanie wytycznych
```

---

## 🛡️ Bezpieczeństwo & Best Practices

- ✅ Semantic HTML5
- ✅ ARIA labels (dla dostępności)
- ✅ No external API calls w domyślnej konfiguracji
- ✅ Graceful degradation (fallback dla nieudanego fetch)
- ✅ CORS-safe request (jeśli SCP Wiki będzie dostępna)

---

## 🐛 Znane Problemy & Przyszłe Usprawnienia

- [ ] Cache lokalny dla wytycznych Klasy D
- [ ] Tryb ciemny/jasny (toggle)
- [ ] Eksport PDF regulacji
- [ ] Więcej symulacji terminalowych
- [ ] Integracja z rzeczywistym systemem powiadomień (mock API)

---

## 📄 Licencja

Projekt jest inspirowany **SCP Foundation** (https://scp-wiki.wikidot.com/) - fanowska, edukacyjna aplikacja.

---

## 👨‍💻 Autor

Zoptymalizowany i zmodularyzowany przez **AI Assistant** - 2024

---

## 📞 Kontakt / Wsparcie

W przypadku problemów technicznych:
1. Sprawdź konsolę przeglądarki (F12 → Console)
2. Upewnij się, że wszystkie pliki są w tym samym folderze
3. Odśwież stronę (Ctrl+F5 - cache bust)
4. Spróbuj innej przeglądarki

---

**Dostęp Przyznany - Poziom 5 Etyki**
