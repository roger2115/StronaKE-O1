# Architektura Projektu - Szczegółowy Opis

## 📁 Struktura Katalogów

```
StronaKE&O1/
│
├── 📄 index.html              # Główny plik HTML
├── 🎨 styles.css              # Globalny stylesheet
├── 🔧 script.js               # Inicjalizacja aplikacji
│
├── 📁 modules/                # Moduły JavaScript (modularyzacja)
│   ├── ui.js                  # Nawigacja i modały
│   ├── terminal.js            # Efekty terminala
│   └── regulations.js         # Wytyczne Klasy D
│
├── 📁 Assets/                 # Zasoby graficzne
│   ├── KElogo.png             # Logo Komitetu ds. Etyki
│   ├── O1.png                 # Logo Omega-1
│   ├── spacebg.jpg            # Tło główne (space)
│   ├── Milky_way.jpg          # Dodatkowe tło
│   ├── spacefooter.png        # Footer visual
│   └── spacehead-layer1.png   # Header layer
│
├── 📚 Dokumentacja
│   ├── README.md              # Dokumentacja główna
│   ├── CHANGELOG.md           # Historia zmian
│   ├── STRUCTURE.md           # Ten plik
│   └── .gitignore             # Git ignore rules
│
└── 🔧 .vscode/                # Ustawienia VS Code
    └── settings.json          # Konfiguracja edytora
```

---

## 🏗️ Architektura Aplikacji

### Flowchart Nawigacji

```
┌─────────────────────┐
│   Strona Główna     │
│   (Selection View)  │
└──────┬──────────────┘
       │
       ├─────────────────────────────────────┐
       │                                     │
       ▼                                     ▼
┌─────────────────────┐            ┌──────────────────┐
│  Komitet ds. Etyki  │            │    Omega-1       │
│   (KE View)         │            │   (O1 View)      │
└──────────┬──────────┘            └────────┬─────────┘
           │                                │
    ┌──────┴──────┐                  ┌──────┴──────┐
    │             │                  │             │
    ▼             ▼                  ▼             ▼
┌────────┐  ┌──────────┐      ┌────────┐   ┌─────────┐
│Orientacja Zarządzanie │      │Charakt. Procedura │
│         Klasa D      │      │Jednostki Zgłaszania│
└────────┘  └──────────┘      └────────┘   └─────────┘
               │                              │
               ▼                              │
            ┌────────────────────┐            │
            │ Modal: Wytyczne D  │            │
            │ (Class D Regs)     │            │
            └────────────────────┘            │
                                              ▼
                                        [Instruktaż]
                                        (Szczegóły)
```

---

## 📋 Struktura HTML

### DOM Tree

```html
<html>
  <head>
    <!-- Meta, Fonts, CSS Link -->
  </head>
  <body>
    <nav class="nav">
      <!-- Navigation Bar -->
    </nav>
    
    <div id="selection" class="view active">
      <!-- Main Selection Screen with 2 Cards -->
      <!-- Card 1: Komitet (with logo) -->
      <!-- Card 2: Omega-1 (with logo) -->
    </div>
    
    <div id="ke-view" class="view">
      <!-- KE Main View -->
      <header class="glass-panel header-banner">
        <!-- Header with Logo -->
      </header>
      <div class="grid-2">
        <section class="glass-panel section">
          <!-- Orientacja -->
        </section>
        <section class="glass-panel section">
          <!-- Zarządzanie Klasa D -->
          <!-- Button: "Pełne Wytyczne" → openModal -->
          <!-- Button: "Zainicjuj Audyt" → runAudit() -->
          <!-- Terminal for Audit -->
        </section>
      </div>
    </div>
    
    <div id="o1-view" class="view">
      <!-- Omega-1 Main View -->
      <header class="glass-panel header-banner">
        <!-- Header with Logo -->
      </header>
      <div class="grid-2">
        <section class="glass-panel section">
          <!-- Charakterystyka Jednostki (long content) -->
        </section>
        <section class="glass-panel section">
          <!-- Procedura Zgłaszania (Instruktaż) -->
          <!-- Terminal for Deploy -->
        </section>
      </div>
    </div>
    
    <dialog id="d-class-modal">
      <!-- Modal for Class D Regulations -->
      <div class="dialog-header">
        <h3>Wytyczne Bytowe Klasy D</h3>
        <button class="dialog-close">✕</button>
      </div>
      <div class="dialog-body text-block" id="d-class-content">
        <!-- Content loaded dynamically -->
      </div>
    </dialog>
    
    <!-- Scripts -->
    <script src="modules/ui.js"></script>
    <script src="modules/terminal.js"></script>
    <script src="modules/regulations.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

---

## 🎨 CSS Architecture

### Sekcje CSS

```css
/* 1. CSS Variables (--y, --bg-glass, etc.) */
:root { ... }

/* 2. Global Styles */
* { ... }
body { ... }
html { ... }

/* 3. Navigation */
.nav { ... }
.nav-container { ... }
.nav-logo { ... }

/* 4. View System */
.view { ... }
.view.active { ... }

/* 5. Selection Screen */
#selection { ... }
.card-container { ... }
.card { ... }
.card-logo { ... }

/* 6. Buttons & Controls */
.back-btn { ... }
.btn { ... }
.btn-group { ... }

/* 7. Panels & Sections */
.glass-panel { ... }
.header-banner { ... }
.section { ... }

/* 8. Text & Content */
.text-block { ... }
.quote { ... }
ul.list { ... }

/* 9. Terminal Display */
.terminal { ... }
.terminal.active { ... }

/* 10. Modal Dialog */
dialog { ... }

/* 11. Responsive Design */
@media (max-width: 1024px) { ... }
@media (max-width: 768px) { ... }

/* 12. Performance & Accessibility */
@media (prefers-reduced-motion: reduce) { ... }
@media print { ... }
```

---

## 🔧 JavaScript Modules

### Module Pattern (IIFE)

```javascript
// Each module is an IIFE that returns public API

const ModuleName = (() => {
    // Private variables & functions
    const privateFunction = () => { ... }
    
    // Public interface
    return {
        publicFunction1: publicFunction1,
        publicFunction2: publicFunction2
    }
})();

// Expose to global scope
window.publicFunction1 = ModuleName.publicFunction1;
```

### Moduł: `ui.js`

```javascript
UIModule = (() => {
    // Public functions:
    // - showView(viewId)       : Switch between views
    // - openModal(id)          : Open modal
    // - closeModal(id)         : Close modal
})();
```

**Zastosowanie:**
```html
<div onclick="showView('ke-view')">Komitet</div>
<button onclick="openModal('d-class-modal')">Wytyczne</button>
```

### Moduł: `terminal.js`

```javascript
TerminalModule = (() => {
    // Public functions:
    // - typeText(elementId, lines, speed)  : Typewriter effect
    // - runAudit()                         : Audit simulation
    // - deployOmega1()                     : Omega-1 simulation
})();
```

**Zastosowanie:**
```javascript
// Called via onclick or event handlers
await TerminalModule.typeText('terminal-id', ['line1', 'line2'], 400);
TerminalModule.runAudit();  // async
TerminalModule.deployOmega1();  // async
```

### Moduł: `regulations.js`

```javascript
RegulationsModule = (() => {
    // Public functions:
    // - loadClassDRegulations()  : Fetch or load fallback content
    
    // Private:
    // - Try fetch from SCP Wiki
    // - On failure, use comprehensive fallback HTML
})();
```

**Zastosowanie:**
```javascript
// Called when modal is opened
RegulationsModule.loadClassDRegulations();
```

### Main Script: `script.js`

```javascript
// DOMContentLoaded event handler:
// 1. initializeConsole()        - Easter egg
// 2. initializeSmoothScroll()   - Anchor link handling
// 3. loadRegulationsOnDemand()  - Modal content setup
// 4. Performance monitoring     - Track page load time
```

---

## 🎭 Interakcja Użytkownika

### Flow Diagram: Kliknięcie na Kartę

```
User clicks "Komitet ds. Etyki" card
    │
    ├─> onclick="showView('ke-view')"
    │
    ├─> UIModule.showView('ke-view')
    │
    ├─> Remove .active from all .view elements
    │
    ├─> Add .active to #ke-view
    │
    ├─> Trigger CSS animation (fadeIn)
    │
    ├─> window.scrollTo({ top: 0, smooth })
    │
    └─> User sees KE view with smooth animation
```

### Flow Diagram: Kliknięcie na "Pełne Wytyczne"

```
User clicks "Pełne Wytyczne" button
    │
    ├─> onclick="openModal('d-class-modal')"
    │
    ├─> UIModule.openModal('d-class-modal')
    │
    ├─> dialog.showModal() (native browser dialog API)
    │
    ├─> Dialog appears with backdrop blur
    │
    ├─> Meanwhile: RegulationsModule.loadClassDRegulations()
    │
    ├─> Attempt fetch from SCP Wiki
    │
    ├─> Parse HTML or use fallback
    │
    ├─> Insert content into #d-class-content
    │
    └─> User sees regulations in modal
```

### Flow Diagram: "Zainicjuj Audyt"

```
User clicks "Zainicjuj Audyt" button
    │
    ├─> onclick="runAudit()"
    │
    ├─> TerminalModule.runAudit()
    │
    ├─> Disable button (prevent double-click)
    │
    ├─> Clear terminal content
    │
    ├─> Set .active class on terminal
    │
    ├─> For each line in auditLines:
    │   ├─> Append "> {line}<br>" to terminal
    │   ├─> Scroll to bottom
    │   └─> await delay(400ms)
    │
    ├─> Enable button
    │
    └─> User sees typewriter animation
```

---

## 🌐 CSS Custom Properties (Variables)

```css
:root {
    /* Colors */
    --y: #facc15;                                    /* Main yellow accent */
    --y-dim: rgba(250, 204, 21, 0.2);               /* Dimmed yellow */
    --y-glow: 0 0 15px rgba(...), 0 0 30px rgba(..) /* Glow effect */
    
    /* Backgrounds */
    --bg-glass: rgba(8, 10, 15, 0.85);              /* Glass effect */
    --bg-glass-hover: rgba(15, 18, 25, 0.95);       /* Hover state */
    
    /* Text */
    --text: #f8fafc;                                /* Primary text */
    --text-dim: #94a3b8;                            /* Secondary text */
    
    /* Transitions */
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Zastosowanie:
```css
.card {
    background: var(--bg-glass);
    border-color: var(--y-dim);
    color: var(--text);
    transition: var(--transition);
}

.card:hover {
    box-shadow: var(--y-glow);
}
```

---

## 🔄 Event Flow

### Initialization Sequence

```
1. HTML parsed
   └─> DOM ready
       │
       └─> DOMContentLoaded event
           │
           ├─> script.js loads
           │   ├─> initializeConsole()
           │   ├─> initializeSmoothScroll()
           │   └─> loadRegulationsOnDemand()
           │
           └─> All modules loaded
               ├─> UIModule ready
               ├─> TerminalModule ready
               └─> RegulationsModule ready
```

---

## 🧠 State Management

State jest przechowywany w DOM:

```javascript
// Current view is stored in CSS class
document.getElementById('ke-view').classList.contains('active')

// Modal open/close is handled by native <dialog> API
const modal = document.getElementById('d-class-modal');
modal.open  // boolean property
```

---

## 🚀 Performance Considerations

### Optimizations Applied

1. **CSS Selectors**
   - Specificity ≤ 3 levels (avoid too specific)
   - Minimize tag selectors

2. **JavaScript**
   - Event delegation where possible
   - Debounced scroll handlers
   - Async/await for I/O operations

3. **Images**
   - `loading="lazy"` attribute on images
   - Properly sized images in Assets/

4. **Animations**
   - CSS transforms (GPU accelerated)
   - No reflow/repaint on hover
   - `will-change` property where needed

5. **Responsive**
   - Mobile-first CSS
   - Breakpoints at 768px, 1024px
   - Flexible grid layouts

---

## 🔐 Security

### Measures Taken

- ✅ No inline JavaScript (all in `<script>` tags with `src`)
- ✅ No inline styles (all in `styles.css`)
- ✅ No `eval()` or `innerHTML` with user input
- ✅ CORS-safe fetch (fallback on error)
- ✅ No external scripts (only Google Fonts CDN)

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
1024px+ : Grid 2-column, full navbar

/* Tablet */
768px - 1024px : Grid 1-column, responsive padding

/* Mobile */
< 768px : Single column, compact layout, full-width dialogs
```

---

## 🔗 Dependencies

### External
- Google Fonts: Rajdhani, Share Tech Mono, Barlow
- (Optional) SCP Wiki for Class D regulations

### Internal
- modules/ui.js
- modules/terminal.js
- modules/regulations.js
- styles.css

### No external frameworks
- No jQuery
- No Bootstrap
- No frameworks - pure vanilla JS + CSS

---

## 🧪 Testing Checklist

```
[ ] HTML validates (W3C)
[ ] CSS validates (W3C)
[ ] JavaScript no console errors
[ ] Cards clickable on selection screen
[ ] Views switch smoothly
[ ] Modals open/close properly
[ ] Terminal animations work
[ ] Regulations load (from Wiki or fallback)
[ ] Mobile layout responsive
[ ] Accessibility (ARIA labels)
[ ] Performance > 90 (Lighthouse)
[ ] Print styles work
```

---

## 📖 Usage Examples

### Add New Section

1. Create HTML in `index.html`:
```html
<div id="new-view" class="view">
    <!-- Content -->
</div>
```

2. Add CSS in `styles.css`:
```css
#new-view { /* styles */ }
```

3. Navigate to it:
```html
<button onclick="showView('new-view')">Go to New</button>
```

### Add New Modal

1. Create dialog HTML:
```html
<dialog id="new-modal">
    <div class="dialog-header">...</div>
    <div class="dialog-body">...</div>
</dialog>
```

2. Trigger with:
```html
<button onclick="openModal('new-modal')">Open Modal</button>
```

### Create New Module

1. Create `modules/newModule.js`:
```javascript
const NewModule = (() => {
    return {
        publicFunction: () => { ... }
    };
})();
```

2. Link in HTML:
```html
<script src="modules/newModule.js"></script>
```

3. Expose globally if needed:
```javascript
window.publicFunction = NewModule.publicFunction;
```

---

**Dokument ostatnio zaktualizowany:** 2024
**Wersja:** 2.0.0
