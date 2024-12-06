
function boje() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function promijeniBoju() {
    document.body.style.backgroundColor = boje();
    const naslov = document.querySelector('h1');
}

document.getElementById('pozadina').addEventListener('click', promijeniBoju);
