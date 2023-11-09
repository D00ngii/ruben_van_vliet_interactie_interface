// ZeroState Animatie en Verwijderen
var buttonStart = document.querySelector("body>section>button");
var zeroState = document.querySelector("body> section");
var titleSound = document.querySelector("body main audio:nth-of-type(1)");

buttonStart.addEventListener("click", start);
buttonStart.addEventListener("click", playTitleSound);

function playTitleSound() {
  zeroState.classList.add("playZeroState");
  if (titleSound.paused) {
    titleSound.play();
  } else {
    titleSound.pause();
  }
}
function start() {
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
var dialogSoundMountainS = document.querySelector(
  "dialog:nth-of-type(1) audio"
);
var dialogTextMountainSChange = [
  "MMMHHMMMM (It was such a tragedy, though I dont remember anything of it happening.)",
  "The only one alive was Nezuko, but she wasn't really human anymore. She actually turned into a demon. She started to attack me first but eventually calmed down.",
  "I was planning on killing her....",
  "Luckily I proved to Giyuu that Nezuko wasn't hungry for human flesh... So he spared her life thankfully.",
];
var dialogImageMountainSChange = [
  "nezuko",
  "tanjirolong",
  "giyuu",
  "tanjirolong",
];
var dialogNameMountainSChange = [
  "Kamado Nezuko",
  "Kamado Tanjiro",
  "Tomioka Giyuu",
  "Kamado Tanjiro",
];
var dialogSoundMountainSChange = ["nezuko", "tanjiro3", "giyuu", "tanjiro2"];

areaMountainS.addEventListener("click", verhaalMountainS);
textMountainS.addEventListener("click", verhaalMountainS);
var levelMountainS = -1;

dialogButtonMountainS.addEventListener("click", MountainS);

// Open de dialog door op de kaart te klikken op Mountain Fujikasane
function verhaalMountainS() {
  level = -1;
  dialogMountainS.showModal();
  dialogSoundMountainS.play();
}

// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function MountainS() {
  levelMountainS = levelMountainS + 1;

  if (levelMountainS < 4) {
    dialogTextMountainS.textContent = dialogTextMountainSChange[levelMountainS];
    dialogImageMountainS.src =
      "images/" + dialogImageMountainSChange[levelMountainS] + ".png";
    dialogNameMountainS.textContent = dialogNameMountainSChange[levelMountainS];
    dialogSoundMountainS.src =
      "sounds/" + dialogSoundMountainSChange[levelMountainS] + ".mp3";
    dialogSoundMountainS.play();
  } else if (levelMountainS == 4) {
    dialogMountainS.close();
    dialogImageMountainS.src = "images/tanjirolong.png";
    dialogTextMountainS.textContent =
      " This is the mountain where I used to live with my family. One day I was selling some charcoal in the city nearby, but I got caught up in heavy snowstorm. When I arrived at my house I found my family, but they were dead... ";
    dialogNameMountainS.textContent = "Kamado Tanjiro";
    dialogSoundMountainS.src = "sounds/tanjiro1.mp3";
    levelMountainS = -1;
  }
  if (levelMountainS == 3) {
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
var dialogSoundMountainF = document.querySelector(
  "dialog:nth-of-type(2) audio"
);
var dialogTextMountainFChange = [
  "He was a pretty hard learner. He did have some difficulties slicing the rock. I wasn't sure if he was going to pass the final selection exam.",
  "Even tho I wasnt able to use Water Breathing to the fullest extend, I did manage to complete the final selction through hard work, and most importantly excellent concentration.",
];
var dialogImageMountainFChange = ["urokodaki", "tanjiroblue"];
var dialogNameMountainFChange = ["Urokodaki Sankoji", "Kamado Tanjiro"];
var dialogSoundMountainFChange = ["urokodaki", "tanjiro2"];

areaMountainF.addEventListener("click", verhaalMountainF);
textMountainF.addEventListener("click", verhaalMountainF);
var levelMountainF = -1;

dialogButtonMountainF.addEventListener("click", MountainF);

// Open de dialog door op de kaart te klikken op Mountain Fujikasane
function verhaalMountainF() {
  level = -1;
  dialogMountainF.showModal();
  dialogSoundMountainF.play();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function MountainF() {
  levelMountainF = levelMountainF + 1;

  if (levelMountainF < 2) {
    dialogTextMountainF.textContent = dialogTextMountainFChange[levelMountainF];
    dialogImageMountainF.src =
      "images/" + dialogImageMountainFChange[levelMountainF] + ".png";
    dialogNameMountainF.textContent = dialogNameMountainFChange[levelMountainF];
    dialogSoundMountainF.src =
      "sounds/" + dialogSoundMountainFChange[levelMountainF] + ".mp3";
    dialogSoundMountainF.play();
  } else if (levelMountainF == 2) {
    dialogMountainF.close();
    dialogImageMountainF.src = "images/tanjiroblue.png";
    dialogTextMountainF.textContent =
      " I was exhausted from a long walk from Mount Fujikasane. That's when I stumbled on a mansion deep in de woods. When I came inside I had a nasty feeling like, like... A DEMON! ";
    dialogNameMountainF.textContent = "Kamado Tanjiro";
    dialogSoundMountainF.src = "sounds/tanjiro1.mp3";
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
var dialogSoundTsuzumiM = document.querySelector("dialog:nth-of-type(3) audio");
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
var dialogSoundTsuzumiMChange = ["nezuko", "zenitsu", "inosuke", "tanjiro2"];

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
  dialogSoundTsuzumiM.play();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function tsuzumiM() {
  levelTsuzumiM = levelTsuzumiM + 1;

  if (levelTsuzumiM < 4) {
    dialogTextTsuzumiM.textContent = dialogTextTsuzumiMChange[levelTsuzumiM];
    dialogImageTsuzumiM.src =
      "images/" + dialogImageTsuzumiMChange[levelTsuzumiM] + ".png";
    dialogNameTsuzumiM.textContent = dialogNameTsuzumiMChange[levelTsuzumiM];
    dialogSoundTsuzumiM.src =
      "sounds/" + dialogSoundTsuzumiMChange[levelTsuzumiM] + ".mp3";
    dialogSoundTsuzumiM.play();
  } else if (levelTsuzumiM == 4) {
    dialogTsuzumiM.close();
    dialogImageTsuzumiM.src = "images/tanjiro.png";
    dialogTextTsuzumiM.textContent =
      " I was exhausted from a long walk from Mount Fujikasane. That's when I stumbled on a mansion deep in de woods. When I came inside I had a nasty feeling like, like... A DEMON! ";
    dialogNameTsuzumiM.textContent = "Kamado Tanjiro";
    dialogSoundTsuzumiM.src = "sounds/tanjiro1.mp3";
    levelTsuzumiM = -1;
  }
  if (levelTsuzumiM == 3) {
    dialogButtonTsuzumiM.innerText = "Close";
  } else {
    dialogButtonTsuzumiM.innerText = "Next";
  }
}

var buttonSound = document.querySelector("body main>audio:nth-of-type(2)");
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
var dialogSoundAsakusa = document.querySelector("dialog:nth-of-type(4) audio");
var dialogTextAsakusaChange = [
  "MMMMMHHHMMMM!! (He just ran off like that)",
  "I saw the person where the scent was coming from and tapped him on his shoulder.",
  "Hm",
  "When he turned around it looked like it was a regular man with his family. But with that scent I am sure it was him. He was the one that killed my family. When I was ready to embrace the fade, he was gone...",
];
var dialogImageAsakusaChange = ["nezuko", "tanjiro", "muzan", "tanjiro"];
var dialogNameAsakusaChange = [
  "Kamado Nezuko",
  "Kamado Tanjiro",
  "Muzan Kibutsuji",
  "Kamado Tanjiro",
];
var dialogSoundAsakusaChange = ["nezuko", "tanjiro2", "muzan", "tanjiro3"];

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
  dialogSoundAsakusa.play();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function asaKusa() {
  levelAsakusa = levelAsakusa + 1;

  if (levelAsakusa < 4) {
    dialogTextAsakusa.textContent = dialogTextAsakusaChange[levelAsakusa];
    dialogImageAsakusa.src =
      "images/" + dialogImageAsakusaChange[levelAsakusa] + ".png";
    dialogNameAsakusa.textContent = dialogNameAsakusaChange[levelAsakusa];
    dialogSoundAsakusa.src =
      "sounds/" + dialogSoundAsakusaChange[levelAsakusa] + ".mp3";
    dialogSoundAsakusa.play();
  } else if (levelAsakusa == 4) {
    dialogAsakusa.close();
    dialogImageAsakusa.src = "images/tanjiro.png";
    dialogTextAsakusa.textContent =
      " I was just about to eat fresh ramen, when suddenly I smelled an intense familiar smell. It was the same smell of the person that murdered my whole family. ";
    dialogNameAsakusa.textContent = "Kamado Tanjiro";
    dialogSoundAsakusa.src = "sounds/tanjiro1.mp3";
    levelAsakusa = -1;
  }
  if (levelAsakusa == 3) {
    dialogButtonAsakusa.innerText = "Close";
  } else {
    dialogButtonAsakusa.innerText = "Next";
  }
}

// Variabelen Mountain Natagumo
var dialogButtonMountainN = document.querySelector(
  "dialog:nth-of-type(5) section > button:nth-of-type(1)"
);
var dialogTextMountainN = document.querySelector(
  "dialog:nth-of-type(5) section p"
);
var dialogImageMountainN = document.querySelector(
  "dialog:nth-of-type(5) section img"
);
var dialogNameMountainN = document.querySelector(
  "dialog:nth-of-type(5) section h2"
);
var dialogSoundMountainN = document.querySelector(
  "dialog:nth-of-type(5) audio"
);
var dialogTextMountainNChange = [
  "MMMMMHHHMMMM!! (It was a very hard battle!)",
  "Even I was shocked on how strong the demons were.",
  "It was the most scary and frightning thing eveeeerrrr. I can't even think back at it without it being scared. It was waayyyyyy too much for meeeeeeeee.",
  "I had to save they're asses...",
];
var dialogImageMountainNChange = ["nezuko", "inosuke", "zenitsu2", "giyuu"];
var dialogNameMountainNChange = [
  "Kamado Nezuko",
  "Inosuke Hashibira",
  "Zenitsu Agatsuma",
  "Tomioka Giyuu",
];
var dialogSoundMountainNChange = ["nezuko", "inosuke2", "zenitsu2", "giyuu"];

var levelMountainN = -1;

dialogButtonMountainN.addEventListener("click", mountainN);

var areaMountainN = document.querySelector("#area-mount-n");
var textMountainN = document.querySelector("#text-mount-n");
var dialogMountainN = document.querySelector("#dialog-mount-n");

areaMountainN.addEventListener("click", verhaalMountainN);
textMountainN.addEventListener("click", verhaalMountainN);

// Open de dialog door op de kaart te klikken op Mountain Natagumo
function verhaalMountainN() {
  levelMountainN = -1;
  dialogMountainN.showModal();
  dialogSoundMountainN.play();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function mountainN() {
  levelMountainN = levelMountainN + 1;

  if (levelMountainN < 4) {
    dialogTextMountainN.textContent = dialogTextMountainNChange[levelMountainN];
    dialogImageMountainN.src =
      "images/" + dialogImageMountainNChange[levelMountainN] + ".png";
    dialogNameMountainN.textContent = dialogNameMountainNChange[levelMountainN];
    dialogSoundMountainN.src =
      "sounds/" + dialogSoundMountainNChange[levelMountainN] + ".mp3";
    dialogSoundMountainN.play();
  } else if (levelMountainN == 4) {
    dialogMountainN.close();
    dialogImageMountainN.src = "images/tanjiro.png";
    dialogTextMountainN.textContent =
      "This was by far the most dangerous and hard battle I have ever faced. There were multiple demons, I had to use Hinokami Kagura. There was even an lower Moon demon there, but I didn't manage to beat them...";
    dialogNameMountainN.textContent = "Kamado Tanjiro";
    dialogSoundMountainN.src = "sounds/tanjiro1.mp3";
    flamesGif.classList.remove("hinokamiKagura");
    soundHinokamiKagura.pause();
    levelMountainN = -1;
  }
  if (levelMountainN == 3) {
    dialogButtonMountainN.innerText = "Close";
  } else {
    dialogButtonMountainN.innerText = "Next";
  }
}

var hinokamiKaguraButton = document.querySelector(
  "dialog:nth-of-type(5) section p button"
);
var flamesGif = document.querySelector("main>img");
var soundHinokamiKagura = document.querySelector("main > audio:nth-of-type(3)");
soundHinokamiKagura.volume = 0.1;

hinokamiKaguraButton.addEventListener("click", hinokamiKagura);

function hinokamiKagura() {
  flamesGif.classList.add("hinokamiKagura");
  soundHinokamiKagura.play();
}
// Variabelen Demon Slayer Corps Headquarters
var dialogButtonDemonSlayerCorpsHQ = document.querySelector(
  "dialog:nth-of-type(6) section > button:nth-of-type(1)"
);
var dialogTextDemonSlayerCorpsHQ = document.querySelector(
  "dialog:nth-of-type(6) section p"
);
var dialogImageDemonSlayerCorpsHQ = document.querySelector(
  "dialog:nth-of-type(6) section img"
);
var dialogNameDemonSlayerCorpsHQ = document.querySelector(
  "dialog:nth-of-type(6) section h2"
);
var dialogSoundDemonSlayerCorpsHQ = document.querySelector(
  "dialog:nth-of-type(6) audio"
);
var dialogTextDemonSlayerCorpsHQChange = [
  "Luckily everything ended well huh? Well you finally completed Total Concentration Breathing, so we should celebrate that.",
  "Thank so much!",
];
var dialogImageDemonSlayerCorpsHQChange = ["shinobu", "tanjiro"];
var dialogNameDemonSlayerCorpsHQChange = ["Shinobu Kocho", "Kamado Tanjiro"];
var dialogSoundDemonSlayerCorpsHQChange = ["shinobu", "tanjiro4"];

var levelDemonSlayerCorpsHQ = -1;

dialogButtonDemonSlayerCorpsHQ.addEventListener("click", demonSlayerCorpsHQ);

var areaDemonSlayerCorpsHQ = document.querySelector("#area-demon-slayer-hq");
var textDemonSlayerCorpsHQ = document.querySelector("#text-demon-slayer-hq");
var dialogDemonSlayerCorpsHQ = document.querySelector(
  "#dialog-demon-slayer-hq"
);

areaDemonSlayerCorpsHQ.addEventListener("click", verhaalDemonSlayerCorpsHQ);
textDemonSlayerCorpsHQ.addEventListener("click", verhaalDemonSlayerCorpsHQ);

// Open de dialog door op de kaart te klikken op Mountain Natagumo
function verhaalDemonSlayerCorpsHQ() {
  levelDemonSlayerCorpsHQ = -1;
  dialogDemonSlayerCorpsHQ.showModal();
  dialogSoundDemonSlayerCorpsHQ.play();
}
// Functie die ervoor zorgt dat je naar de volgende persoon kan gaan in de conversatie met hulp van Aaminah Basnoe
function demonSlayerCorpsHQ() {
  levelDemonSlayerCorpsHQ = levelDemonSlayerCorpsHQ + 1;

  if (levelDemonSlayerCorpsHQ < 2) {
    dialogTextDemonSlayerCorpsHQ.textContent =
      dialogTextDemonSlayerCorpsHQChange[levelDemonSlayerCorpsHQ];
    dialogImageDemonSlayerCorpsHQ.src =
      "images/" +
      dialogImageDemonSlayerCorpsHQChange[levelDemonSlayerCorpsHQ] +
      ".png";
    dialogNameDemonSlayerCorpsHQ.textContent =
      dialogNameDemonSlayerCorpsHQChange[levelDemonSlayerCorpsHQ];
    dialogSoundDemonSlayerCorpsHQ.src =
      "sounds/" +
      dialogSoundDemonSlayerCorpsHQChange[levelDemonSlayerCorpsHQ] +
      ".mp3";
    dialogSoundDemonSlayerCorpsHQ.play();
  } else if (levelDemonSlayerCorpsHQ == 2) {
    dialogDemonSlayerCorpsHQ.close();
    dialogImageDemonSlayerCorpsHQ.src = "images/tanjiro.png";
    dialogTextDemonSlayerCorpsHQ.textContent =
      "The Corps found out that Nezuko was a Demon, so they initially wanted to kill her, but they spared her life again. But I did manage to learn Total Concentration Breathing.";
    dialogNameDemonSlayerCorpsHQ.textContent = "Kamado Tanjiro";
    dialogSoundDemonSlayerCorpsHQ.src = "sounds/tanjiro.mp3";

    levelDemonSlayerCorpsHQ = -1;
  }
  if (levelDemonSlayerCorpsHQ == 1) {
    dialogButtonDemonSlayerCorpsHQ.innerText = "Close";
  } else {
    dialogButtonDemonSlayerCorpsHQ.innerText = "Next";
  }
}
