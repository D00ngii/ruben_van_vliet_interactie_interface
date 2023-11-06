// JavaScript Document
console.log("Howdy!");

var areaMountainS = document.querySelector("#area-mount-s");
var textMountainS = document.querySelector("#text-mount-s");
var dialogMountainS = document.querySelector("#dialog-mount-s");

areaMountainS.onclick = verhaalMountainS;
textMountainS.onclick = verhaalMountainS;

function verhaalMountainS() {
  dialogMountainS.showModal();
}
