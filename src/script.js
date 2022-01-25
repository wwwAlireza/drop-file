"use strict";
const root = document.querySelector(":root");
const dropElements = {
    zone: document.querySelector("#drop-zone"),
    title: document.querySelector("#drop-zone-title")
}

const dropZoneFileDrop = {
    enter: () => {
        root.style.setProperty("--drop-zone-border-color", "#818b94");
        root.style.setProperty("--drop-zone-scale", "scale(1.02)");
        root.style.setProperty("--drop-zone-background", "rgba(255, 255, 255, .02)");
    },
    leave: () => {
        root.style.setProperty("--drop-zone-border-color", "#495057");
        root.style.setProperty("--drop-zone-scale", "scale(1)");
        root.style.setProperty("--drop-zone-background", "rgba(255, 255, 255, 0)");
    }
}

dropElements.zone.addEventListener("drop", dropHandler);
dropElements.zone.addEventListener("dragover", dragOverHandler);
dropElements.zone.addEventListener("dragenter", dragEnterHandler);
dropElements.zone.addEventListener("dragleave", dragLeaveHandler);
let file;

function dropHandler(eventData) {
    eventData.preventDefault();
    file = eventData.dataTransfer.items[0];
    if (file.kind == "file") {
        file = file.getAsFile();
        dropElements.title.innerText = file.name;
        dropZoneFileDrop.leave();
        console.log(file);
    }
}

// dragOver
function dragOverHandler(eventData) {
    eventData.preventDefault();
}

// dragEnter
function dragEnterHandler(eventData) {
    eventData.preventDefault();
    dropZoneFileDrop.enter();
}

// dragLeave
function dragLeaveHandler(eventData) {
    eventData.preventDefault();
    dropZoneFileDrop.leave();
}