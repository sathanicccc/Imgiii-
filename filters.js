const filterList = [
    { name: 'Normal', filter: 'none' },
    { name: 'Grayscale', filter: 'grayscale(100%)' },
    { name: 'Sepia', filter: 'sepia(100%)' },
    { name: 'Invert', filter: 'invert(100%)' },
    { name: 'Blur', filter: 'blur(5px)' },
    { name: 'Brightness', filter: 'brightness(150%)' },
    { name: 'Contrast', filter: 'contrast(200%)' },
    { name: 'Vintage', filter: 'sepia(50%) contrast(120%)' },
    { name: 'Cold', filter: 'hue-rotate(180deg) saturate(150%)' }
];

const filterContainer = document.getElementById('filterList');

filterList.forEach(f => {
    const btn = document.createElement('div');
    btn.className = 'filter-thumb';
    btn.innerText = f.name;
    btn.onclick = () => {
        ctx.filter = f.filter;
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    };
    filterContainer.appendChild(btn);
});

