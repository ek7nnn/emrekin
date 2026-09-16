const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainTitle = document.getElementById('mainTitle');

// "No" (kırmızı çarpı simgesi) butonunun fare yaklaşınca rastgele kaçması
function moveNoButton() {
    const randomX = (Math.random() - 0.5) * 150;
    const randomY = (Math.random() - 0.5) * 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

// "Evet!" butonuna basıldığında yazının değişmesi
yesBtn.addEventListener('click', () => {
    mainTitle.textContent = 'Yippeeee! Seni Çok Seviyorum! ❤️';
});