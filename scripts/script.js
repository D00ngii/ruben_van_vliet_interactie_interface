// var logoImg = document.querySelector("body h1 img");
// var audioTitle = document.querySelector("body audio:nth-of-type(1)");

// logoImg.onclick = titleSound;

// function titleSound() {
//   if (audioTitle.paused) {
//     audioTitle.play();
//   } else {
//     audioTitle.pause();
//   }
// }
// Dialog 1  Mountain Sagiri
var areaMountainS = document.querySelector("#area-mount-s");
var textMountainS = document.querySelector("#text-mount-s");
var dialogMountainS = document.querySelector("#dialog-mount-s");
var audioDialogMountSTanjiro = document.querySelector(
  "body main audio:nth-of-type(2)"
);

areaMountainS.onclick = dialog1;
textMountainS.onclick = dialog1;

function verhaalMountainS() {
  dialogMountainS.showModal();
}

function tanjiroTalking1() {
  if (audioDialogMountSTanjiro.paused) {
    audioDialogMountSTanjiro.play();
  } else {
    audioDialogMountSTanjiro.pause();
  }
}
function dialog1() {
  tanjiroTalking1();
  verhaalMountainS();
}

// Dialog Mountain S change character
var dialogTextMountainS = document.querySelector("dialog:nth-of-type(1) p");
var dialogButtonMountainS = document.querySelector(
  "dialog:nth-of-type(1) section>button"
);
const dialogImageMountainS = document.querySelector(
  "dialog:nth-of-type(1) img"
);
const dialogNameMountainS = document.querySelector("dialog:nth-of-type(1) h2");
var audioDialogNezuko1 = document.querySelector(
  "body main audio:nth-of-type(3)"
);
var dialogMountSButtonClose = document.querySelector(
  "dialog:nth-of-type(1) section > button:nth-of-type(2)"
);
dialogButtonMountainS.onclick = nextDialogMountS;
dialogMountSButtonClose.onclick = closeDialogMountS;

function closeDialogMountS() {
  dialogMountainS.close();
  dialogButtonMountainS.classList.remove("hidden");
  dialogMountSButtonClose.classList.add("hidden");
  dialogTextMountainS.innerHTML =
    "This is the mountain where I used to live with my family. One day I was selling some charcoal in the city nearby, but I got caught up in heavy snowstorm. When I arrived at my house I found my family, but they were dead...";
  dialogImageMountainS.src = "../images/Tanjiro-Background-PNG.png";
  dialogNameMountainS.innerHTML = "Kamado Tanjiro";
  audioDialogNezuko1.pause();
}

function nextDialogMountS() {
  NezukoTalking1();
  imageChangeDialog1();
}

function imageChangeDialog1() {
  dialogTextMountainS.innerHTML = "MMMMHHHMMMMM! (It was very tragic!)";
  dialogImageMountainS.src = "../images/nezuko.png";
  dialogNameMountainS.innerHTML = "Kamado Nezuko";
  dialogButtonMountainS.classList.add("hidden");
  dialogMountSButtonClose.classList.remove("hidden");
  audioDialog1.pause();
  console.log(functionDialog1Complete);
}

function NezukoTalking1() {
  if (audioDialogNezuko1.paused) {
    audioDialogNezuko1.play();
  } else {
    audioDialogNezuko1.pause();
  }
}

// dialogButtonMountainS.addEventListener("click", function () {
//   if ((functionDialog1Complete = false)) {
//     dialogMountainS.close();
//   } else {
//     dialogMountainS.showModal();
//   }
// });
var areaMountainF = document.querySelector("#area-mount-f");
var textMountainF = document.querySelector("#text-mount-f");
var dialogMountainF = document.querySelector("#dialog-mount-f");

areaMountainF.onclick = verhaalMountainF;
textMountainF.onclick = verhaalMountainF;

function verhaalMountainF() {
  dialogMountainF.showModal();
}
