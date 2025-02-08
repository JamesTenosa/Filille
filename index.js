// The text to be repeated
const textContent = `cat`;

// Function to fill the text
const fillText = () => {
    const textElement = document.getElementById('text');
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Calculate how many times the text needs to repeat
    const textWidth = getTextWidth(textContent, '12px Times New Roman');
    const maxCharsPerLine = Math.ceil(viewportWidth / textWidth);
    const maxLines = Math.ceil(viewportHeight / 12); // Using font size of 12px

    // Create the repeated text
    const repeatedText = (textContent + ' ').repeat(maxCharsPerLine * maxLines);
    textElement.innerHTML = repeatedText;
};

// Function to compute text width
const getTextWidth = (text, font) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    return context.measureText(text).width;
};

// Set initial text on load
window.addEventListener('load', fillText);
// Update text on resize to ensure the entire viewport is covered with text
window.addEventListener('resize', fillText);