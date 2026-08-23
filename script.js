// ==============================
// SAÏDA & DESCHANEL — SCRIPT
// ==============================

// ----- COMPTE À REBOURS -----

const weddingDate = new Date("2027-06-05T14:00:00+02:00");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  const distance = weddingDate - now;

  if (distance <= 0) {
    days.textContent = "0";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(distance / 1000);

  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  days.textContent = d;
  hours.textContent = String(h).padStart(2, "0");
  minutes.textContent = String(m).padStart(2, "0");
  seconds.textContent = String(s).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ----- MENU -----

const menuButton = document.querySelector(".menu-button");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");

    const isOpen = document.body.classList.contains("menu-open");

    menuButton.setAttribute("aria-expanded", isOpen);
  });
}


// ----- BOUTON CONFIRMER MA PRÉSENCE -----

const rsvpButton = document.querySelector(".rsvp-button");

if (rsvpButton) {
  rsvpButton.addEventListener("click", () => {
    const rsvpSection = document.querySelector("#rsvp");

    if (rsvpSection) {
      rsvpSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}


// ----- LIENS "DÉCOUVRIR" -----

const discoverButton = document.querySelector(".discover");

if (discoverButton) {
  discoverButton.addEventListener("click", () => {
    const nextSection = document.querySelector("#rsvp");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });

  /* =========================
   CARROUSEL OÙ LOGER
========================= */

const lodgingTrack = document.querySelector('.lodging-track');
const lodgingPrev = document.querySelector('.lodging-arrow--prev');
const lodgingNext = document.querySelector('.lodging-arrow--next');

if (lodgingTrack && lodgingPrev && lodgingNext) {

  const getCardWidth = () => {
    const card = lodgingTrack.querySelector('.lodging-card');
    return card ? card.offsetWidth : lodgingTrack.clientWidth;
  };

  lodgingNext.addEventListener('click', () => {
    lodgingTrack.scrollBy({
      left: getCardWidth(),
      behavior: 'smooth'
    });
  });

  lodgingPrev.addEventListener('click', () => {
    lodgingTrack.scrollBy({
      left: -getCardWidth(),
      behavior: 'smooth'
    });
  });

}
}
