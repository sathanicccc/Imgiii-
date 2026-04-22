const fontList = [
    'Roboto', 'Lobster', 'Bebas Neue', 'Pacifico', 'Oswald', 'Playball', 
    'Monoton', 'Righteous', 'Alkatra', 'Anton', 'Dancing Script', 'Indie Flower'
    // ഇതുപോലെ 100 ഫോണ്ടുകൾ ഈ ലിസ്റ്റിൽ ആഡ് ചെയ്യാം
];

const fontPanel = document.getElementById('font-panel');

function loadFontOptions() {
    const listDiv = document.createElement('div');
    listDiv.className = 'font-grid';
    
    fontList.forEach(font => {
        const btn = document.createElement('button');
        btn.innerText = 'Abc';
        btn.style.fontFamily = font;
        btn.onclick = () => applyFont(font);
        listDiv.appendChild(btn);
    });
    fontPanel.appendChild(listDiv);
}

function applyFont(fontName) {
    ctx.font = `50px ${fontName}`;
    ctx.fillStyle = "white";
    ctx.fillText("Sathanic Edit", 100, 100); // Sample text
}

loadFontOptions();
