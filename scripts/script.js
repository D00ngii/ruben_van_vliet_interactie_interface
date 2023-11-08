var buttonStart = document.querySelector("body>section>button");
var zeroState = document.querySelector("body> section");
var titleSound = document.querySelector("body main audio:nth-of-type(1)");

buttonStart.addEventListener("click", start);
zeroState.addEventListener("click", playTitleSound);

function playTitleSound() {
  zeroState.classList.add("playZeroState");
  if (titleSound.paused) {
    titleSound.play();
  } else {
    titleSound.pause();
  }
}
function start() {
  console.log("vfnsbvs");
  zeroState.classList.add("hidden");
}
// Variabelen Mountain Sagiri
var areaMountainS = document.querySelector("#area-mount-s");
var textMountainS = document.querySelector("#text-mount-s");
var dialogMountainS = document.querySelector("#dialog-mount-s");

var dialogButtonMountainS = document.querySelector(
  "dialog:nth-of-type(1) section > button:nth-of-type(1)"
);
var dialogTextMountainS = document.querySelector(
  "dialog:nth-of-type(1) section p"
);
var dialogImageMountainS = document.querySelector(
  "dialog:nth-of-type(1) section img"
);
var dialogNameMountainS = document.querySelector(
  "dialog:nth-of-type(1) section h2"
);
// var dialogSoundMountainS =
var dialogTextMountainSChange = [
  "He was a pretty hard learner. He did have some difficulties slicing the rock. I wasn't sure if he was going to pass the final selection exam.",
  "Even tho I wasnt able to use Water Breathing to the fullest extend, I did manage to complete the final selction through hard work, and most importantly excellent concentration.",
];
var dialogImageMountainSChange = ["urokodaki", "tanjiro"];
var dialogNameMountainSChange = ["Urokodaki Sankoji", "Kamado Tanjiro"];
var dialogSoundMountainSChange = ["urokodaki", "tanjiro.."];

areaMountainS.addEventListener("click", verhaalMountainS);
textMountainS.addEventListener("click", verhaalMountainS);
var levelMountainS = -1;

dialogButtonMountainS.addEventListener("click", MountainS);

// Open de dialog door op de kaart te klikken op Mountain Fujikasane
function verhaalMountainS() {
  level = -1;
  dialogMountainS.showModal();
}

// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function MountainS() {
  levelMountainS = levelMountainS + 1;

  if (levelMountainS < 2) {
    dialogTextMountainS.textContent = dialogTextMountainSChange[levelMountainS];
    dialogImageMountainS.src =
      "images/" + dialogImageMountainSChange[levelMountainS] + ".png";
    dialogNameMountainS.textContent = dialogNameMountainSChange[levelMountainS];
  } else if (levelMountainS == 2) {
    console.log("Oh no");
    dialogMountainS.close();
    dialogImageMountainS.src = "images/tanjiro.png";
    dialogTextMountainS.textContent =
      " I was exhausted from a long walk from Mount Fujikasane. That's when I stumbled on a mansion deep in de woods. When I came inside I had a nasty feeling like, like... A DEMON! ";
    dialogNameMountainS.textContent = "Kamado Tanjiro";
    levelMountainS = -1;
  }
  if (levelMountainS == 1) {
    dialogButtonMountainS.innerText = "Close";
  } else {
    dialogButtonMountainS.innerText = "Next";
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

areaMountainF.addEventListener("click", verhaalMountainF);
textMountainF.addEventListener("click", verhaalMountainF);
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
      "images/" + dialogImageMountainFChange[levelMountainF] + ".png";
    dialogNameMountainF.textContent = dialogNameMountainFChange[levelMountainF];
  } else if (levelMountainF == 2) {
    console.log("Oh no");
    dialogMountainF.close();
    dialogImageMountainF.src = "images/tanjiro.png";
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
  "This demon was able to rotate the room to it's will using a drum instrument. It was especially difficult to defeat him since I also had to protect 2 children.",
];
var dialogImageTsuzumiMChange = ["nezuko", "zenitsu", "inosuke", "tanjiro"];
var dialogNameTsuzumiMChange = [
  "Kamado Nezuko",
  "Zenitsu Agatsuma",
  "Inosuke Hashibira",
  "Kamado Tanjiro",
];
var dialogSoundTsuzumiMChange = ["nezuko", "zenitsu", "inosuke", "tanjiro"];

var levelTsuzumiM = -1;

dialogButtonTsuzumiM.addEventListener("click", tsuzumiM);

var areaTsuzumiM = document.querySelector("#area-tsuzumi-m");
var textTsuzumiM = document.querySelector("#text-tsuzumi-m");
var dialogTsuzumiM = document.querySelector("#dialog-tsuzumi-m");

areaTsuzumiM.addEventListener("click", verhaalTsuzumiM);
textTsuzumiM.addEventListener("click", verhaalTsuzumiM);

// Open de dialog door op de kaart te klikken op Tsuzumi Mansion
function verhaalTsuzumiM() {
  levelTsuzumiM = -1;
  dialogTsuzumiM.showModal();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function tsuzumiM() {
  levelTsuzumiM = levelTsuzumiM + 1;

  if (levelTsuzumiM < 4) {
    dialogTextTsuzumiM.textContent = dialogTextTsuzumiMChange[levelTsuzumiM];
    dialogImageTsuzumiM.src =
      "images/" + dialogImageTsuzumiMChange[levelTsuzumiM] + ".png";
    dialogNameTsuzumiM.textContent = dialogNameTsuzumiMChange[levelTsuzumiM];
  } else if (levelTsuzumiM == 4) {
    console.log("Oh no");
    dialogTsuzumiM.close();
    dialogImageTsuzumiM.src = "images/tanjiro.png";
    dialogTextTsuzumiM.textContent =
      " I was exhausted from a long walk from Mount Fujikasane. That's when I stumbled on a mansion deep in de woods. When I came inside I had a nasty feeling like, like... A DEMON! ";
    dialogNameTsuzumiM.textContent = "Kamado Tanjiro";
    levelTsuzumiM = -1;
  }
  if (levelTsuzumiM == 3) {
    dialogButtonTsuzumiM.innerText = "Close";
  } else {
    dialogButtonTsuzumiM.innerText = "Next";
  }
}

var buttonSound = document.querySelector("body main>audio:nth-of-type(3)");
var buttonsAll = document.querySelectorAll("button");

// Samen met Sjors een regel zodat elke button wordt aangesproken
buttonsAll.forEach((button) => (button.onclick = buttonClickSound));

function buttonClickSound() {
  console.log("works");
  if (buttonSound.paused) {
    buttonSound.play();
  } else {
    buttonSound.pause();
  }
}

// Variabelen Asakusa
var dialogButtonAsakusa = document.querySelector(
  "dialog:nth-of-type(4) section > button:nth-of-type(1)"
);
var dialogTextAsakusa = document.querySelector(
  "dialog:nth-of-type(4) section p"
);
var dialogImageAsakusa = document.querySelector(
  "dialog:nth-of-type(4) section img"
);
var dialogNameAsakusa = document.querySelector(
  "dialog:nth-of-type(4) section h2"
);
// var dialogSoundAsakusa =
var dialogTextAsakusaChange = [
  "MMMMMHHHMMMM!! (I was sleeping)",
  "It was so.... SCARRYYYYYYYYYY!!!!",
  "HEHEHEHEHE",
  "This demon was able to rotate the room to it's will using a drum instrument. It was especially difficult to defeat him since I also had to protect 2 children.",
];
var dialogImageAsakusaChange = ["nezuko", "zenitsu", "inosuke", "tanjiro"];
var dialogNameAsakusaChange = [
  "Kamado Nezuko",
  "Zenitsu Agatsuma",
  "Inosuke Hashibira",
  "Kamado Tanjiro",
];
var dialogSoundAsakusaChange = ["nezuko", "zenitsu", "inosuke", "tanjiro"];

var levelAsakusa = -1;

dialogButtonAsakusa.addEventListener("click", asaKusa);

var areaAsakusa = document.querySelector("#area-asakusa");
var textAsakusa = document.querySelector("#text-asakusa");
var dialogAsakusa = document.querySelector("#dialog-asakusa");

areaAsakusa.addEventListener("click", verhaalAsakusa);
textAsakusa.addEventListener("click", verhaalAsakusa);

// Open de dialog door op de kaart te klikken op Asakusa
function verhaalAsakusa() {
  levelAsakusa = -1;
  dialogAsakusa.showModal();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function asaKusa() {
  levelAsakusa = levelAsakusa + 1;

  if (levelAsakusa < 4) {
    dialogTextAsakusa.textContent = dialogTextAsakusaChange[levelAsakusa];
    dialogImageAsakusa.src =
      "images/" + dialogImageAsakusaChange[levelAsakusa] + ".png";
    dialogNameAsakusa.textContent = dialogNameAsakusaChange[levelAsakusa];
  } else if (levelAsakusa == 4) {
    console.log("Oh no");
    dialogAsakusa.close();
    dialogImageAsakusa.src = "images/tanjiro.png";
    dialogTextAsakusa.textContent =
      " I was exhausted from a long walk from Mount Fujikasane. That's when I stumbled on a mansion deep in de woods. When I came inside I had a nasty feeling like, like... A DEMON! ";
    dialogNameAsakusa.textContent = "Kamado Tanjiro";
    levelAsakusa = -1;
  }
  if (levelAsakusa == 3) {
    dialogButtonAsakusa.innerText = "Close";
  } else {
    dialogButtonAsakusa.innerText = "Next";
  }
}
