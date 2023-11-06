// JavaScript Document

var areaMountainS = document.querySelector("#area-mount-s");
var textMountainS = document.querySelector("#text-mount-s");
var dialogMountainS = document.querySelector("#dialog-mount-s");
var audioDialog = document.querySelector("body audio:nth-of-type(2)");

areaMountainS.onclick = dialog1;
textMountainS.onclick = dialog1;

function verhaalMountainS() {
  dialogMountainS.showModal();
}

function tanjiroTalking1() {
  if (audioDialog.paused) {
    audioDialog.play();
  } else {
    audioDialog.pause();
  }
}
function dialog1() {
  tanjiroTalking1();
  verhaalMountainS();
}
var areaMountainF = document.querySelector("#area-mount-f");
var textMountainF = document.querySelector("#text-mount-f");
var dialogMountainF = document.querySelector("#dialog-mount-f");

areaMountainF.onclick = verhaalMountainF;
textMountainF.onclick = verhaalMountainF;

function verhaalMountainF() {
  dialogMountainF.showModal();
}
var logoImg = document.querySelector("body h1 img");
var audioTitle = document.querySelector("body audio:nth-of-type(1)");

logoImg.onclick = titleSound;

function titleSound() {
  if (audioTitle.paused) {
    audioTitle.play();
  } else {
    audioTitle.pause();
  }
}
