const DARK_MODE_BUTTON = document.getElementById('mode-selector');

function handleDark() {
    const RODAPE = document.getElementsByTagName('footer');
    const CORPO = document.getElementsByTagName('body');
    
    document.getElementById('page-title').classList.toggle('dark-mode');
    document.getElementById('mode-selector').classList.toggle('dark-mode');
    
    for(let i = 0; i < RODAPE.length; i++) {
        RODAPE[i].classList.toggle('dark-mode');
    }

    for(let i = 0; i < CORPO.length; i++) {
        CORPO[i].classList.toggle('dark-mode');
    }
}

DARK_MODE_BUTTON.addEventListener("click", handleDark);