"use strict";
const dropElements = {
    zone: document.querySelector("#drop-zone"),
    title: document.querySelector("#drop-zone-title")
}

dropElements.zone.addEventListener("drop", dropHandler);
dropElements.zone.addEventListener("dragover", dragOverHandler);
let file;

function dropHandler(eventData) {
    eventData.preventDefault();
    file = eventData.dataTransfer.items[0];
    if (file.kind == "file") {
        file = file.getAsFile();
        dropElements.title.innerText = file.name;
        console.log(file);
    }
}

function dragOverHandler(eventData) {
    eventData.preventDefault();
}