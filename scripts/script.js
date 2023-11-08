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
  dialogImageMountainS.src = "../images/tanjiro.png";
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

// Variabelen Mountain Fujikasane
var areaMountainF = document.querySelector("#area-mount-f");
var textMountainF = document.querySelector("#text-mount-f");
var dialogMountainF = document.querySelector("#dialog-mount-f");

var dialogButtonMountainF = document.querySelector(
  "dialog:nth-of-type(2) section > button:nth-of-type(1)"
);
var dialogTextMountainF = document.querySelector(
  "dialog:nth-of-type(2) section p"
);
var dialogImageMountainF = document.querySelector(
  "dialog:nth-of-type(2) section img"
);
var dialogNameMountainF = document.querySelector(
  "dialog:nth-of-type(2) section h2"
);
// var dialogSoundMountainF =
var dialogTextMountainFChange = [
  "He was a pretty hard learner. He did have some difficulties slicing the rock. I wasn't sure if he was going to pass the final selection exam.",
  "Even tho I wasnt able to use Water Breathing to the fullest extend, I did manage to complete the final selction through hard work, and most importantly excellent concentration.",
];
var dialogImageMountainFChange = ["urokodaki", "tanjiro"];
var dialogNameMountainFChange = ["Urokodaki Sankoji", "Kamado Tanjiro"];
var dialogSoundMountainFChange = ["urokodaki", "tanjiro.."];

areaMountainF.onclick = verhaalMountainF;
textMountainF.onclick = verhaalMountainF;
var levelMountainF = -1;

dialogButtonMountainF.addEventListener("click", MountainF);

// Open de dialog door op de kaart te klikken op Mountain Fujikasane
function verhaalMountainF() {
  level = -1;
  dialogMountainF.showModal();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function MountainF() {
  levelMountainF = levelMountainF + 1;

  if (levelMountainF < 2) {
    dialogTextMountainF.textContent = dialogTextMountainFChange[levelMountainF];
    dialogImageMountainF.src =
      "../images/" + dialogImageMountainFChange[levelMountainF] + ".png";
    dialogNameMountainF.textContent = dialogNameMountainFChange[levelMountainF];
  } else if (levelMountainF == 2) {
    console.log("Oh no");
    dialogMountainF.close();
    dialogImageMountainF.src = "../images/tanjiro.png";
    dialogTextMountainF.textContent =
      " I was exhausted from a long walk from Mount Fujikasane. That's when I stumbled on a mansion deep in de woods. When I came inside I had a nasty feeling like, like... A DEMON! ";
    dialogNameMountainF.textContent = "Kamado Tanjiro";
    levelMountainF = -1;
  }
  if (levelMountainF == 1) {
    dialogButtonMountainF.innerText = "Close";
  } else {
    dialogButtonMountainF.innerText = "Next";
  }
}

// Variabelen Tsuzumi Mansion
var dialogButtonTsuzumiM = document.querySelector(
  "dialog:nth-of-type(3) section > button:nth-of-type(1)"
);
var dialogTextTsuzumiM = document.querySelector(
  "dialog:nth-of-type(3) section p"
);
var dialogImageTsuzumiM = document.querySelector(
  "dialog:nth-of-type(3) section img"
);
var dialogNameTsuzumiM = document.querySelector(
  "dialog:nth-of-type(3) section h2"
);
// var dialogSoundTsuzumiM =
var dialogTextTsuzumiMChange = [
  "MMMMMHHHMMMM!! (I was sleeping)",
  "It was so.... SCARRYYYYYYYYYY!!!!",
  "HEHEHEHEHE",
];
var dialogImageTsuzumiMChange = ["nezuko", "zenitsu", "inosuke"];
var dialogNameTsuzumiMChange = [
  "Kamado Nezuko",
  "Zenitsu Agatsuma",
  "Inosuke Hashibira",
];
var dialogSoundTsuzumiMChange = ["nezuko", "zenitsu", "inosuke"];

var levelTsuzumiM = -1;

dialogButtonTsuzumiM.addEventListener("click", tsuzumiM);

var areaTsuzumiM = document.querySelector("#area-tsuzumi-m");
var textTsuzumiM = document.querySelector("#text-tsuzumi-m");
var dialogTsuzumiM = document.querySelector("#dialog-tsuzumi-m");

areaTsuzumiM.onclick = verhaalTsuzumiM;
textTsuzumiM.onclick = verhaalTsuzumiM;

// Open de dialog door op de kaart te klikken op Tsuzumi Mansion
function verhaalTsuzumiM() {
  levelTsuzumiM = -1;
  dialogTsuzumiM.showModal();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function tsuzumiM() {
  levelTsuzumiM = levelTsuzumiM + 1;

  if (levelTsuzumiM < 3) {
    dialogTextTsuzumiM.textContent = dialogTextTsuzumiMChange[levelTsuzumiM];
    dialogImageTsuzumiM.src =
      "../images/" + dialogImageTsuzumiMChange[levelTsuzumiM] + ".png";
    dialogNameTsuzumiM.textContent = dialogNameTsuzumiMChange[levelTsuzumiM];
  } else if (levelTsuzumiM == 3) {
    console.log("Oh no");
    dialogTsuzumiM.close();
    dialogImageTsuzumiM.src = "../images/tanjiro.png";
    dialogTextTsuzumiM.textContent =
      " I was exhausted from a long walk from Mount Fujikasane. That's when I stumbled on a mansion deep in de woods. When I came inside I had a nasty feeling like, like... A DEMON! ";
    dialogNameTsuzumiM.textContent = "Kamado Tanjiro";
    levelTsuzumiM = -1;
  }
  if (levelTsuzumiM == 2) {
    dialogButtonTsuzumiM.innerText = "Close";
  } else {
    dialogButtonTsuzumiM.innerText = "Next";
  }
}
