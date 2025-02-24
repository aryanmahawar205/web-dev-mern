// 1. Draw Mickey Mouse using canvas
const mickeyCanvas = document.getElementById("mickeyCanvas");
const ctxMickey = mickeyCanvas.getContext("2d");

// Head
ctxMickey.beginPath();
ctxMickey.arc(250, 250, 100, 0, 2 * Math.PI);
ctxMickey.fillStyle = "black";
ctxMickey.fill();

// Ears
ctxMickey.beginPath();
ctxMickey.arc(150, 150, 80, 0, 2 * Math.PI);
ctxMickey.fill();
ctxMickey.beginPath();
ctxMickey.arc(350, 150, 80, 0, 2 * Math.PI);
ctxMickey.fill();

// 2. Draw yellow smiley face with eyes and mouth
const smileyCanvas = document.getElementById("smileyCanvas");
const ctxSmiley = smileyCanvas.getContext("2d");

// Face
ctxSmiley.beginPath();
ctxSmiley.arc(100, 100, 80, 0, 2 * Math.PI);
ctxSmiley.fillStyle = "yellow";
ctxSmiley.fill();

// Eyes
ctxSmiley.beginPath();
ctxSmiley.arc(60, 70, 10, 0, 2 * Math.PI);
ctxSmiley.arc(140, 70, 10, 0, 2 * Math.PI);
ctxSmiley.fillStyle = "black";
ctxSmiley.fill();

// Mouth
ctxSmiley.beginPath();
ctxSmiley.arc(100, 120, 40, 0, Math.PI);
ctxSmiley.stroke();

// 3. Draw a house with a roof, door, and windows
const houseCanvas = document.getElementById("houseCanvas");
const ctxHouse = houseCanvas.getContext("2d");

// House Body
ctxHouse.fillStyle = "lightblue";
ctxHouse.fillRect(50, 70, 100, 100);

// Roof
ctxHouse.beginPath();
ctxHouse.moveTo(50, 70);
ctxHouse.lineTo(150, 70);
ctxHouse.lineTo(100, 30);
ctxHouse.closePath();
ctxHouse.fillStyle = "brown";
ctxHouse.fill();

// Door
ctxHouse.fillStyle = "brown";
ctxHouse.fillRect(85, 120, 30, 50);

// Windows
ctxHouse.fillStyle = "white";
ctxHouse.fillRect(60, 80, 20, 20);
ctxHouse.fillRect(120, 80, 20, 20);

// 4. Square Div that turns blue on hover
const square = document.getElementById("square");
let isHovered = false;

square.addEventListener("mouseover", () => {
    if (!isHovered) {
        square.style.backgroundColor = "blue";
        isHovered = true;
    }
});

// 5. Random number generation for paragraph
const para = document.getElementById("para");
let numberGenerated = false;

para.addEventListener("mouseenter", () => {
    if (!numberGenerated) {
        para.textContent = Math.floor(Math.random() * 100);
        numberGenerated = true;
    }
});

para.addEventListener("mouseleave", () => {
    numberGenerated = false;
});

// 6. Event listener for div: Change color on enter and leave
const eventDiv = document.getElementById("eventDiv");

eventDiv.addEventListener("mouseenter", () => {
    eventDiv.style.backgroundColor = "blue";
});

eventDiv.addEventListener("mouseleave", () => {
    eventDiv.style.backgroundColor = "white";
});

// Double click to hide the paragraph
para.addEventListener("dblclick", () => {
    para.classList.add("hidden");
});

// 7. Button to enable/disable hover event for text change
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

let isActive = false;

startBtn.addEventListener("click", () => {
    if (!isActive) {
        para.addEventListener("mouseenter", () => {
            para.textContent = "You are hovering!";
        });
        isActive = true;
    }
});

stopBtn.addEventListener("click", () => {
    if (isActive) {
        para.removeEventListener("mouseenter", () => {
            para.textContent = "You are hovering!";
        });
        isActive = false;
    }
});