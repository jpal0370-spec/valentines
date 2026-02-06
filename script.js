const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const memeScreen = document.getElementById("memeScreen");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;

// NO button logic
noBtn.onclick = () => {
  noCount++;

  if (noCount < 6) {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
  } else {
    card.style.display = "none";
    memeScreen.style.display = "flex";
  }
};

// Meme click → back to YES/NO
memeScreen.onclick = () => {
  memeScreen.style.display = "none";
  card.style.display = "block";
};

// YES → final love screen
yesBtn.onclick = () => {
  card.style.display = "none";
  finalScreen.style.display = "flex";
};
