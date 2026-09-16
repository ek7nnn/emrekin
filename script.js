// NO runs away
function dodge() {
  noBtn.style.position = 'absolute';
  noBtn.style.left = rand() + 'px';
  noBtn.style.top = rand() + 'px';
  yesScale += 0.07;
}
noBtn.on('enter', dodge);

yesBtn.onclick = () => {
  title.textContent = 'Yippeeee!';
  rainHearts();
};