function startClock() {
    const clockElement = document.getElementById('clock');
    let secondsElapsed = 0;

    setInterval(() => {
        secondsElapsed++;
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;

        clockElement.textContent = `Temps: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

// Activem el rellotge quan es carregui la pàgina
window.onload = startClock;


// validar contraseña
function validatePassword() {
    const pass1 = document.getElementById('password1').value;
    const pass2 = document.getElementById('password2').value;

    if (pass1.length < 8) {
        alert('La contrasenya ha de tenir almenys 8 caràcters.');
        return;
    }

    if (pass1 !== pass2) {
        alert('Les contrasenyes no coincideixen.');
        return;
    }

    alert('Contrasenya validada correctament!');
}

function togglePasswordVisibility(inputId, button) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = button.querySelector('.eye-icon');
    
    // Comprova l'estat actual i canvia
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '👀';
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '🫥';
    }
}

function showImage(src, title, text) {
    const previewContainer = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');
    const previewTitle = document.getElementById('preview-title');
    const previewText = document.getElementById('preview-text');

    previewImg.src = src;
    previewTitle.textContent = title;
    previewText.textContent = text;

    previewContainer.style.display = 'block';
}

function highlightSection(section) {
    // Afegim la classe "highlighted" per canviar l'estil
    section.classList.add('highlighted');

    // Mostrem el text ocult
    const hiddenText = section.querySelector('.hidden-text');
    hiddenText.classList.add('visible');
}

function resetSection(section) {
    // Eliminem la classe "highlighted" per tornar a l'estil inicial
    section.classList.remove('highlighted');

    // Amaguem el text ocult
    const hiddenText = section.querySelector('.hidden-text');
    hiddenText.classList.remove('visible');
}