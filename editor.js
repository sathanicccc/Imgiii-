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

// Export Function
document.getElementById('export-btn').onclick = () => {
    const link = document.createElement('a');
    link.download = 'edited-photo.png';
    link.href = canvas.toDataURL();
    link.click();
};
