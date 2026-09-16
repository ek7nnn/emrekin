const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainTitle = document.getElementById('mainTitle');
const bgMusic = document.getElementById('bgMusic');

// Kullanıcı sayfada herhangi bir yere tıkladığı an müzik çalmaya başlar
document.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Müzik çalınamadı:", e));
    }
}, { once: true }); // Sadece ilk tıklamada çalışır

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
    mainTitle.textContent = 'Yeeyyy! Seni Çok Seviyorum! ❤️';
    noBtn.style.display = 'none';
});