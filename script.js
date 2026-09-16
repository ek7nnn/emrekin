const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainTitle = document.getElementById('mainTitle');

// "Hayır" butonuna fare yaklaşınca kaçması
function moveNoButton() {
    const randomX = (Math.random() - 0.5) * 160;
    const randomY = (Math.random() - 0.5) * 80;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

// "Evet" butonuna basılınca yazının değişmesi
yesBtn.addEventListener('click', () => {
    mainTitle.textContent = 'Yeessss! Seni Çok Seviyorum! ❤️';
    noBtn.style.display = 'none'; // Hayır butonunu gizle
});