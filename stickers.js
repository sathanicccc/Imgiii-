const stickers = [
    'https://cdn-icons-png.flaticon.com/512/742/742751.png', // Smile
    'https://cdn-icons-png.flaticon.com/512/633/633600.png', // Fire
    'https://cdn-icons-png.flaticon.com/512/1067/1067232.png' // Crown
];

function loadStickers() {
    const panel = document.getElementById('overlay-panel');
    const div = document.createElement('div');
    div.className = 'sticker-grid';

    stickers.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.className = 'sticker-item';
        img.onclick = () => addOverlay(url); // പഴയ addOverlay ഫങ്ക്ഷൻ ഉപയോഗിക്കുന്നു
        div.appendChild(img);
    });
    panel.appendChild(div);
}

loadStickers();
