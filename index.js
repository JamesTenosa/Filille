// The text to be repeated
const textContent = `Oh, ey You don't know, babe When you hold me And kiss me slowly It's the sweetest thing And it don't change If I had it my way You would know that you are You're the coffee that I need in the morning You're my sunshine in the rain when it's pouring Won't you give yourself to me Give it all, oh I just wanna see I just wanna see how beautiful you are You know that I see it I know you're a star Where you go I follow No matter how far If life is a movie Oh you're the best part, oh oh oh You're the best part, oh oh oh Best part It's the sunrise And those brown eyes, yes You're the one that I desire When we wake up And then we make love It makes me feel so nice You're my water when I'm stuck in the desert You're the Tylenol I take when my head hurts You're the sunshine on my life I just wanna see how beautiful you are You know that I see it I know you're a star Where you go I follow No matter how far If life is a movie Then you're the best part, oh oh oh You're the best part, oh oh oh Best part If you love me won't you say something If you love me won't you Won't you If you love me won't you say something If you love me won't you Love me, won't you If you love me won't you say something If you love me won't you If you love me won't you say something If you love me won't you Love me, won't you If you love me won't you say something If you love me won't you If you love me won't you say something If you love me won't you Love me, won't you. I really enjoy spending time with you, and I appreciate how we can just be real with each other. Secret Message: Hi Fililleeee, Im not rushing anything or expecting something agad, pero I want you to know that I do see you as someone special. I respect your space, and I just want things to feel natural between us. No pressure, no rush—gusto ko lang maging honest about how I feel. I love the way you tell your stories, how your mood lighten up when you talk about something you're passionate about. I admire how strong and independent you are, kahit minsan di mo napapansin how amazing you really are. Your laugh? Sobrang genuine, it makes everything feel lighter. And your smile—grabe, ang contagious. You have this way of making things feel comfortable, like home. Kahit simpleng moments lang, sobrang saya mo kasama.`;

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