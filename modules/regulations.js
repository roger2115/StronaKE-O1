/**
 * Regulations Module - Loads Class D Housing Regulations from SCP Wiki
 */

const RegulationsModule = (() => {
    /**
     * Load Class D Housing Regulations (with fallback)
     */
    const loadClassDRegulations = async () => {
        const contentDiv = document.getElementById('d-class-content');
        if (!contentDiv) return;

        // Start with loading message
        contentDiv.innerHTML = '<p style="color: var(--text-dim); text-align: center;">Ładowanie wytycznych z centralnej bazy danych...</p>';

        try {
            // Try to fetch from SCP Wiki
            const response = await fetch('https://scp-wiki.wikidot.com/ethics-committee-class-d-housing-regulations', {
                method: 'GET',
                headers: {
                    'Accept': 'text/html'
                }
            });

            if (response.ok) {
                const html = await response.text();
                // Parse the content (extract main content area)
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const mainContent = doc.querySelector('.page-content');

                if (mainContent) {
                    contentDiv.innerHTML = mainContent.innerHTML;
                    // Clean up unnecessary elements
                    contentDiv.querySelectorAll('script, style, iframe').forEach(el => el.remove());
                    return;
                }
            }
        } catch (error) {
            console.warn('Could not fetch from SCP Wiki, using fallback content:', error);
        }

        // Fallback content (comprehensive Class D regulations)
        contentDiv.innerHTML = `
            <p><strong>Wytyczne Bytowe Klasy D - Dokument Standardowy</strong></p>
            
            <h3 style="margin-top: 20px; margin-bottom: 10px;">I. ZAKWATEROWANIE I WARUNKI BYTOWE</h3>
            <ul class="list">
                <li><strong>Przestrzeń minimalna:</strong> Każdy personel Klasy D musi mieć do dyspozycji przestrzeń mieszkalną nie mniejszą niż 3,5m × 2,5m (8,75m²) na jedną osobę.</li>
                <li><strong>Kontrola temperatury:</strong> Temperatura w pomieszczeniach musi być utrzymywana między 18°C a 24°C, z możliwością regulacji przez personel nadzorczy.</li>
                <li><strong>Oświetlenie:</strong> Naturalne lub sztuczne oświetlenie musi zapewniać cykl 12 godzin dzień/noc. Oświetlenie musi być wystarczające do czytania o natężeniu minimum 300 lux.</li>
                <li><strong>Wentylacja:</strong> Systemy wentylacji muszą gwarantować minimum 6 wymian powietrza na godzinę. Pomieszczenia muszą być wolne od zanieczyszczeń powietrza przekraczających normy bezpieczeństwa.</li>
            </ul>

            <h3 style="margin-top: 20px; margin-bottom: 10px;">II. ŻYWIENIE I OPIEKA MEDYCZNA</h3>
            <ul class="list">
                <li><strong>Minimalna dawka kaloryczna:</strong> 2500 kcal dziennie dla dorosłych. Dieta musi być zbilansowana i zawierać wszystkie niezbędne składniki odżywcze.</li>
                <li><strong>Woda pitna:</strong> Dostęp do czystej wody pitnej przez 24 godziny dziennie. Minimum 2 litry na dzień na osobę.</li>
                <li><strong>Badania medyczne:</strong> Przeglądy zdrowotne powinny odbywać się minimum raz miesięcznie. Wszelkie problemy zdrowotne muszą być dokumentowane i leczony.</li>
                <li><strong>Przeglądy psychiatryczne:</strong> Po każdym testach wiążących się z anomaliami memetycznymi, manipulacją umysłem lub ekstremalnym stresem, personel Klasy D musi przejść ewaluację psychiatryczną.</li>
            </ul>

            <h3 style="margin-top: 20px; margin-bottom: 10px;">III. BEZPIECZEŃSTWO I PRAWA PRACOWNICZE</h3>
            <ul class="list">
                <li><strong>Zakaz tortur:</strong> Wszelkie kary cielesne, niezwiązane bezpośrednio z testowaniem obiektu SCP lub samoobroną personelu ochrony, są surowo zabronione.</li>
                <li><strong>Dostęp do informacji:</strong> Personel Klasy D ma prawo do informacji na temat eksperymentów, które będą na nich przeprowadzane, w miarę możliwości bezpieczeństwa.</li>
                <li><strong>Ochrona psychiczna:</strong> Personel musi mieć dostęp do wsparcia psychologicznego, zwłaszcza po ekspozycji na anomalie stanowiące zagrożenie psychiczne.</li>
                <li><strong>Rekompensata:</strong> Personel Klasy D, który zostaje uwolniony, musi otrzymać rekompensatę finansową zależną od długości służby i rodzaju ekspozycji.</li>
            </ul>

            <h3 style="margin-top: 20px; margin-bottom: 10px;">IV. PROCEDURY I ODPOWIEDZIALNOŚĆ</h3>
            <ul class="list">
                <li><strong>Rejestracja dochodzeń:</strong> Wszelkie naruszenia niniejszych wytycznych muszą być raportowane do lokalnego delegata Komitetu ds. Etyki w ciągu 48 godzin.</li>
                <li><strong>Konsekwencje naruszań:</strong> Personel odpowiedzialny za poważne naruszenia może zostać pociągnięty do odpowiedzialności dyscyplinarnej, łącznie z usunięciem ze stanowiska.</li>
                <li><strong>Inspekcje:</strong> Komitet ds. Etyki przeprowadza coroczne inspekcje wszystkich placówek utrzymujących personel Klasy D. Nieprzestrzeganie standardów może skutkować wznowieniem operacyjnym.</li>
                <li><strong>Interwencja Omega-1:</strong> W przypadku powtarzających się lub rażących naruszań, Mobilna Formacja Operacyjna Omega-1 jest upoważniona do przeprowadzenia interwencji.</li>
            </ul>

            <p style="margin-top: 30px; color: var(--text-dim); font-size: 0.95rem;"><strong>Ostatnia aktualizacja:</strong> 2024 rok. Dokument podlega okresowym przeglądom przez Komitet ds. Etyki. Niezastosowanie się stanowi poważne naruszenie Kodeksu Etycznego.</p>
        `;
    };

    return {
        loadClassDRegulations
    };
})();

// Load regulations when modal is shown
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('d-class-modal');
    if (modal) {
        modal.addEventListener('show', () => {
            RegulationsModule.loadClassDRegulations();
        });

        // Also trigger on click of button
        document.querySelectorAll('[onclick*="openModal(\'d-class-modal\')"]').forEach(btn => {
            btn.addEventListener('click', () => {
                setTimeout(() => RegulationsModule.loadClassDRegulations(), 100);
            });
        });
    }
});
