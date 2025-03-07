let model;

// Ladda MobileNet-modellen
async function loadModel() {
    model = await mobilenet.load();
    console.log("MobileNet-modellen har laddats.");
}

loadModel();

// Funktion för att hantera uppladdning av bild
document.getElementById('imageInput').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const img = document.getElementById('imagePreview');
    img.src = URL.createObjectURL(file);

    // Vänta på att bilden ska laddas innan vi gör en förutsägelse
    img.onload = async () => {
        const predictions = await model.classify(img);
        displayResults(predictions);
    };
});

// Visa resultat och ge återvinningsrekommendationer
function displayResults(predictions) {
    const resultDiv = document.getElementById('result');
    const recommendationDiv = document.getElementById('recommendation');

    resultDiv.innerHTML = `
        <h3>Resultat:</h3>
        <p><strong>Prediktion 1:</strong> ${predictions[0].className} - ${Math.round(predictions[0].probability * 100)}% sannolikhet</p>
        <p><strong>Prediktion 2:</strong> ${predictions[1].className} - ${Math.round(predictions[1].probability * 100)}% sannolikhet</p>
        <p><strong>Prediktion 3:</strong> ${predictions[2].className} - ${Math.round(predictions[2].probability * 100)}% sannolikhet</p>
    `;

    // Ge återvinningsrekommendationer baserat på prediktionerna
    recommendationDiv.innerHTML = generateRecommendation(predictions[0].className);
}

// Generera återvinningsrekommendation baserat på klassificering
function generateRecommendation(prediction) {
    const lowerPrediction = prediction.toLowerCase();
    if (lowerPrediction.includes('plastic') || lowerPrediction.includes('bottle')) {
        return "Sortera plasten i plaståtervinning.";
    } else if (lowerPrediction.includes('glass') || lowerPrediction.includes('bottle')) {
        return "Sortera glaset i glasåtervinning.";
    } else if (lowerPrediction.includes('paper') || lowerPrediction.includes('carton')) {
        return "Sortera pappret i papperåtervinning.";
    } else {
        return `Objektet "${prediction}" kan inte identifieras för återvinning.`;
    }
}
