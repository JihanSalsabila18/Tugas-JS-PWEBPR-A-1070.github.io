// const questionEl = document.getElementsByClassName('pertanyaan');
// const yesBtn = document.getElementsByClassName('iya');
// const noBtn = document.getElementsByClassName('tidak');
// const resultEl = document.getElementsByClassName('result');

// yesBtn.addEventListener('click', () => {
//   resultEl.textContent = 'You are lying!';
//   resultEl.classList.add('lying');
// });

// noBtn.addEventListener('click', () => {
//   resultEl.textContent = 'You are honest!';
//   resultEl.classList.add('honest');
// });

const questionEl = document.querySelector('.pertanyaan'); // Select the single question element
const yesBtn = document.querySelector('.iya'); // Select the single "Iya" button
const noBtn = document.querySelector('.tidak'); // Select the single "Tidak" button
const resultEl = document.querySelector('.result'); // Select the single result paragraph

yesBtn.addEventListener('click', () => {
  location.href = 'TUGASPRAK2_IYA.html';
});


noBtn.addEventListener('click', () => {
    location.href = 'TUGASPRAK2_TIDAK.html';
});

