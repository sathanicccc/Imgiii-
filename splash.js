// സൈറ്റ് ലോഡ് ആകുമ്പോൾ
window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const mainApp = document.getElementById('main-app');

    // 3 സെക്കൻഡ് (അനിമേഷൻ തീരാൻ എടുക്കുന്ന സമയം) കഴിഞ്ഞാൽ വാനിഷ് ആക്കുക
    setTimeout(() => {
        splash.classList.add('splash-fade-out'); // ഫേഡ് ഔട്ട് അനിമേഷൻ ആഡ് ചെയ്യുന്നു
        
        // വാനിഷ് ആനിമേഷൻ പൂർത്തിയാക്കാൻ 0.8 സെക്കൻഡ് കൂടി വെയിറ്റ് ചെയ്യുക
        setTimeout(() => {
            splash.style.display = 'none'; // പൂർണ്ണമായി നീക്കം ചെയ്യുന്നു
            mainApp.style.display = 'flex'; // ടൂൾ കാണിക്കുന്നു
        }, 800); 

    }, 3000); // 3 seconds total splash time
});
