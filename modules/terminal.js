/**
 * Terminal Module - Typewriter effects & simulation
 */

const TerminalModule = (() => {
    /**
     * Typewriter effect for terminal
     */
    const typeText = async (elementId, lines, speed = 400) => {
        const terminal = document.getElementById(elementId);
        if (!terminal) return;

        terminal.innerHTML = '';
        terminal.classList.add('active');

        for (const line of lines) {
            terminal.innerHTML += `> ${line}<br>`;
            terminal.scrollTop = terminal.scrollHeight;
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    };

    /**
     * Run audit simulation
     */
    const runAudit = async () => {
        const btn = document.querySelector('button[onclick="runAudit()"]');
        if (!btn) return;

        btn.disabled = true;
        btn.style.opacity = '0.5';

        const auditLines = [
            "Autoryzacja SCiPnet... <span class='highlight'>ZATWIERDZONO</span>",
            "Pobieranie raportów medycznych i żywieniowych...",
            "Skanowanie Ośrodka-19 pod kątem współczynnika śmiertelności...",
            "Analiza logów przydziału żywności...",
            "Kontrola stanów przechowywania...",
            "<span class='highlight'>WYNIK:</span> Wykryto 4 nieautoryzowane testy bez zatwierdzenia etycznego w Sektorze B.",
            "<span class='highlight'>STATUS:</span> Raport eskalowany do Komitetu ds. Etyki.",
            "Logi przekazane do weryfikacji manualnej. Audyt zakończony."
        ];

        await typeText('audit-terminal', auditLines);
        btn.disabled = false;
        btn.style.opacity = '1';
    };

    /**
     * Deploy Omega-1 simulation
     */
    const deployOmega1 = async () => {
        const btn = document.querySelector('button[onclick="deployOmega1()"]');
        if (!btn) return;

        btn.disabled = true;
        btn.style.opacity = '0.5';

        const omegaLines = [
            "Inicjowanie awaryjnego protokołu zgłoszeniowego...",
            "Zabezpieczanie kanału i szyfrowanie V-klasy...",
            "Łączenie z Dowództwem Omega-1... <span class='highlight'>POŁĄCZONO</span>",
            "Odbiór sygnału. Trwa namierzanie lokalizacji terminala...",
            "<span class='highlight'>STATUS OPERACYJNY:</span> Zespół śledczy w drodze.",
            "<span class='highlight'>PRIORYTET:</span> Wysoki - interwencja etyczna",
            "Archiwizacja dowodów. Świadkowie zabezpieczeni.",
            "Zostań na miejscu. Nikomu nie ufaj. Komunikacja zakończona."
        ];

        await typeText('omega-terminal', omegaLines);
        btn.disabled = false;
        btn.style.opacity = '1';
    };

    return {
        typeText,
        runAudit,
        deployOmega1
    };
})();

// Expose to global scope
window.runAudit = TerminalModule.runAudit;
window.deployOmega1 = TerminalModule.deployOmega1;
