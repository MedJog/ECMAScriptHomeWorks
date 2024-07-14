function changeStyleDelayed(elementSelector, timeStart, timeChange, timeFinish) {
  const blockEl = document.querySelector(elementSelector);
  setTimeout(() => {
    blockEl.style.display = 'flex';
  }, timeStart);
  setTimeout(() => {
    blockEl.style.color = 'greenyellow';
    blockEl.style.backgroundColor = 'black';
    blockEl.style.borderColor = 'greenyellow';
    blockEl.style.transition = 'transform 2s';
    blockEl.style.transform = 'scale(0.2)';
  }, timeChange);
  setTimeout(() => {
    blockEl.style.display = 'none';
  }, timeFinish);
}
function changeStyleImage(elementSelector, timeStart, timeChange, timeFinish) {
  const blockEl = document.querySelector(elementSelector);
  setTimeout(() => {
    blockEl.style.display = 'flex';
  }, timeStart);
  setTimeout(() => {
    blockEl.style.transition = 'transform 2s';
    blockEl.style.transform = 'scale(0.2)';
  }, timeChange);
  setTimeout(() => {
    blockEl.style.display = 'none';
  }, timeFinish);
}
changeStyleDelayed('.block-hello', 1000, 2000, 3000);
changeStyleDelayed('.text-1', 3000, 4000, 5000);
changeStyleDelayed('.text-2', 5000, 6000, 7000);
changeStyleDelayed('.text-3', 7000, 8000, 9000);
changeStyleImage('.image',9000, 10000, 11000);