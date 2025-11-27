javascript
// Main menu navigation
document.getElementById('start-btn')?.addEventListener('click', () => {
  window.location.href = 'games.html';
});

document.getElementById('info-btn')?.addEventListener('click', () => {
  window.open('https://linktr.ee/gainply', '_blank'); // Change to your Linktree or create info.html
});

// Game Modal Logic (for games.html)
let modal = document.getElementById('gameModal');
let modalTitle = document.getElementById('modalTitle');
let modalDesc = document.getElementById('modalDesc');
let mainImg = document.getElementById('mainImg');
let apkLink = document.getElementById('apkLink');
let obbLink = document.getElementById('obbLink');
let gameVideo = document.getElementById('gameVideo');
let closeBtn = document.getElementsByClassName('close')[0];

const gamesData = {
  "Hyper Run": {
    desc: "Fast-paced endless runner with neon visuals and addictive gameplay.",
    apk: "downloads/HyperRun_v1.2.apk",
    obb: "downloads/HyperRun_main.obb",
    video: "https://www.youtube.com/embed/abc123",
    screenshots: ["assets/games/hyperrun1.jpg", "assets/games/hyperrun2.jpg"]
  },
  "Neon Blade": {
    desc: "Brutal cyberpunk action game. Slash your way through the neon city.",
    apk: "downloads/NeonBlade_v1.0.apk",
    obb: null,
    video: "https://www.youtube.com/embed/xyz789",
    screenshots: ["assets/games/neonblade1.jpg"]
  }
  // Add more games here
};

function openGameModal(gameName) {
  const game = gamesData[gameName];
  if (!game) return;

  modalTitle.textContent = gameName;
  modalDesc.textContent = game.desc;
  mainImg.src = game.screenshots[0];
  apkLink.href = game.apk;
  gameVideo.src = game.video;

  if (game.obb) {
    obbLink.href = game.obb;
    obbLink.style.display = "inline-block";
  } else {
    obbLink.style.display = "none";
  }

  modal.style.display = "block";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
  gameVideo.src = ""; // Stop video
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    gameVideo.src = "";
  }
};
