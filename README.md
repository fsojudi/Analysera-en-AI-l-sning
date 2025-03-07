# AI Återvinningsklassificering

## Beskrivning
Denna webbapplikation använder AI för att klassificera objekt och ge rekommendationer om hur de ska återvinnas. Applikationen använder TensorFlow.js och MobileNet-modellen för att identifiera objekt från bilder och ge rekommendationer om hur de ska hanteras för återvinning.

## Teknologier
- **HTML**: För att strukturera webbgränssnittet.
- **CSS**: För styling och design av applikationen.
- **JavaScript**: För funktionaliteten, inklusive integrering av AI-modellen.
- **TensorFlow.js**: För att använda MobileNet-modellen för bildklassificering.

## Installation

1. Klona eller ladda ner detta repository:
    ```bash
    git clone https://github.com/fsojudi/Analysera-en-AI-l-sning.git
    ```

2. Öppna projektmappen i din webbläsare eller en lokal server.
    - Du kan öppna `index.html` direkt i en webbläsare, eller använda en lokal server i Visual Studio Code.

3. Applikationen kräver internetuppkoppling för att ladda TensorFlow.js och MobileNet-modellen.

## Användning

1. Ladda upp en bild genom att klicka på knappen "Välj fil".
2. När bilden laddats upp kommer AI:n att klassificera objektet och visa resultatet.
3. Baserat på objektets klassificering kommer en återvinningsrekommendation att visas.

## Etiska Överväganden
- Applikationen tar inte emot några användardata och bilder sparas inte.
- För att minimera bias tränas modellen på en mångsidig dataset.
- Användarnas integritet respekteras genom att bilder inte lagras eller delas.

## Framtida Förbättringar
- Implementera fler återvinningskategorier för olika typer av material.
- Förbättra klassificeringens noggrannhet genom att träna modellen med en större och mer varierad dataset.
- Lägg till funktionalitet för att hantera andra typer av hållbarhetsrekommendationer.


