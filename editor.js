const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
const uploadInput = document.getElementById('upload-input');

let baseImage = null;

uploadInput.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            baseImage = img;
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

function showTools(panelId) {
    document.querySelectorAll('.tool-panel').forEach(p => p.style.display = 'none');
    document.getElementById(panelId).style.display = 'block';
}

let selectedLayer = null;
let isDragging = false;

canvas.addEventListener('mousedown', startDragging);
canvas.addEventListener('mousemove', dragLayer);
canvas.addEventListener('mouseup', stopDragging);

// Mobile Touch Support
canvas.addEventListener('touchstart', (e) => startDragging(e.touches[0]));
canvas.addEventListener('touchmove', (e) => dragLayer(e.touches[0]));
canvas.addEventListener('touchend', stopDragging);

function startDragging(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // ചെക്ക് ചെയ്യുക ഏതെങ്കിലും ലെയറിന് മുകളിലാണോ ടച്ച് ചെയ്തതെന്ന്
    layers.forEach((layer, index) => {
        if (mouseX > layer.x && mouseX < layer.x + layer.width &&
            mouseY > layer.y && mouseY < layer.y + layer.height) {
            selectedLayer = layer;
            isDragging = true;
        }
    });
}

function dragLayer(e) {
    if (isDragging && selectedLayer) {
        const rect = canvas.getBoundingClientRect();
        selectedLayer.x = (e.clientX - rect.left) - (selectedLayer.width / 2);
        selectedLayer.y = (e.clientY - rect.top) - (selectedLayer.height / 2);
        renderLayers(); // ക്യാൻവാസ് റീഫ്രഷ് ചെയ്യും
    }
}

function stopDragging() {
    isDragging = false;
    selectedLayer = null;
}

// Export Function
document.getElementById('export-btn').onclick = () => {
    const link = document.createElement('a');
    link.download = 'edited-photo.png';
    link.href = canvas.toDataURL();
    link.click();
};
