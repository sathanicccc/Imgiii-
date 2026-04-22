// ലെയറുകൾ സ്റ്റോർ ചെയ്യാൻ ഒരു അറേ
let layers = []; 

// പുതിയ ഒരു ഓവർലേ ഇമേജ് ആഡ് ചെയ്യാനുള്ള ഫങ്ക്ഷൻ
function addOverlayImage(event) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const newLayer = {
                id: Date.now(),
                img: img,
                x: 50,
                y: 50,
                width: 200, // Default width
                height: (img.height / img.width) * 200, // Aspect ratio maintain ചെയ്യാൻ
                opacity: 1,
                visible: true
            };
            layers.push(newLayer);
            renderCanvas(); // ക്യാൻവാസ് അപ്ഡേറ്റ് ചെയ്യാൻ
            updateLayerUI(); // ലെയർ ലിസ്റ്റ് കാണിക്കാൻ
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// ക്യാൻവാസിലെ എല്ലാം ഒന്നുകൂടി വരയ്ക്കാൻ
function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. മെയിൻ ബാക്ക്ഗ്രൗണ്ട് ഇമേജ് വരയ്ക്കുന്നു
    if (baseImage) {
        ctx.globalAlpha = 1;
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    }

    // 2. ഓരോ ഓവർലേ ലെയറുകളും വരയ്ക്കുന്നു
    layers.forEach(layer => {
        if (layer.visible) {
            ctx.globalAlpha = layer.opacity;
            ctx.drawImage(layer.img, layer.x, layer.y, layer.width, layer.height);
        }
    });
}

// ലെയറുകളുടെ ലിസ്റ്റ് UI-ൽ കാണിക്കാൻ (CapCut Style)
function updateLayerUI() {
    const tray = document.getElementById('layerTray');
    tray.innerHTML = '<span>Layers: </span>';
    
    layers.forEach((layer, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'layer-thumb';
        thumb.innerHTML = `L${index + 1}`;
        thumb.onclick = () => selectLayer(layer.id);
        tray.appendChild(thumb);
    });
}
