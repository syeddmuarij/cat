/* --------- Landing Date --------- */
function checkDate() {
  const input = document.getElementById('meet-date').value;
  const errorMsg = document.getElementById('error-msg');
  const correctDate = "2025-09-09"; // First meeting date

  if (input === correctDate) {
    const landing = document.getElementById('landing');
    const mainContent = document.getElementById('main-content');

    // Fully hide landing
    landing.style.display = 'none';
    mainContent.classList.remove('hidden');
    startLoveCounter(); // Start the love counter once unlocked
  } else {
    errorMsg.textContent = "Hmm… that’s not it. Try again 💖";
  }
}

/* --------- Love Counter --------- */
function startLoveCounter() {
  const startDate = new Date('2025-05-01'); // From May 2025
  const counterEl = document.getElementById('loveCounter');
  setInterval(() => {
    const now = new Date();
    const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    counterEl.textContent = `Days of Loving You: ${diff}`;
  }, 1000);
}

/* --------- Revealing Text --------- */
document.querySelectorAll('.reveal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.getAttribute('data-text');
    const revealEl = document.getElementById('revealedText');
    revealEl.textContent = text;
    revealEl.classList.add('show');
    // Trigger confetti if it's a confetti button
    if (btn.classList.contains('confetti-btn')) {
      triggerConfetti();
    }
  });
});

/* --------- Pop-Up Modal --------- */
function showLovePopup() {
  const popup = document.getElementById('lovePopup');
  popup.classList.remove('hidden');
  popup.classList.add('show');
}

function closePopup() {
  const popup = document.getElementById('lovePopup');
  popup.classList.remove('show');
  popup.classList.add('hidden');
}

/* --------- Dark Mode Toggle (New) --------- */
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const toggle = document.getElementById('darkModeToggle');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

/* --------- Confetti Burst (New) --------- */
function triggerConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random colors
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

/* --------- Love Quiz (New) --------- */
let quizQuestions = [
  { question: "Is your smile my favorite thing?", answer: true },
  { question: "Do I love you more than words can say?", answer: true },
  { question: "Will I stop loving you? (Hint: Never!)", answer: false }
];
let currentQuestion = 0;

function startQuiz() {
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  if (currentQuestion < quizQuestions.length) {
    document.getElementById('question').textContent = quizQuestions[currentQuestion].question;
    document.getElementById('quizResult').textContent = '';
  } else {
    document.getElementById('question').textContent = "Quiz complete! You know me so well. 💕";
    document.getElementById('quizResult').textContent = '';
  }
}

function answerQuiz(userAnswer) {
  const correct = quizQuestions[currentQuestion].answer;
  if (userAnswer === correct) {
    document.getElementById('quizResult').textContent = "Correct! My love for you is endless. ❤️";
  } else {
    document.getElementById('quizResult').textContent = "Wrong, but I still love you! 😘";
  }
  currentQuestion++;
  setTimeout(showQuestion, 2000);
}

/* --------- Virtual Hug (New) --------- */
function virtualHug() {
  const message = document.getElementById('hugMessage');
  message.classList.remove('hidden');
  setTimeout(() => message.classList.add('hidden'), 5000); // Hide after 5 seconds
}

/* --------- Scroll Reveal --------- */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
},{threshold:0.2});
reveals.forEach(el => observer.observe(el));

/* --------- Scroll Next --------- */
function scrollNext() {
  const sections = document.querySelectorAll('.section');
  if(sections[1]) sections[1].scrollIntoView({behavior:'smooth'});
}

/* --------- Secret Unlock --------- */
function unlockSecret() {
  const password = prompt("Hint: What I call you most?");
  if(password && password.toLowerCase().trim() === "pyaru bacha"){
    const secret = document.getElementById('secret');
    secret.classList.remove('hidden');
    setTimeout(()=>secret.classList.add('visible'),100);
  } else {
    alert("That's not it 🤍");
  }
}