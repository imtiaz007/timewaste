const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dumbq = document.getElementById("dumbQ");
const hindiholly = document.getElementById("hindiHolly");
const createRoomBtn = document.getElementById("create-room");
const joinRoomBtn = document.getElementById("join-room");
const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");
const readyBtn = document.getElementById("ready");

import { uniqueId, shuffleArray, generateName } from "./utils.js";
import { dumbQ_color, dumbQ, hindiEng_color, hindiEng } from "./cardPacks.js";

const socket = io();

var packId = dumbQ_color;
var curr_pack = shuffleArray(dumbQ);

// Keep track of current card
let currentActiveCard = 0;
var card_time = 0;

// Store DOM cards
let cardsEl = [];

createCards(curr_pack, packId);

// Event listeners
dumbq.addEventListener("click", () => {
  curr_pack = shuffleArray(dumbQ);
  packId = dumbQ_color;
  createCards(dumbQ, dumbQ_color);
});

hindiholly.addEventListener("click", () => {
  curr_pack = shuffleArray(hindiEng);
  packId = hindiEng_color;
  createCards(hindiEng, hindiEng_color);
});

createRoomBtn.addEventListener("click", () => {
  if (document.getElementById("create-roomForm").style.display == "none") {
    document.getElementById("join-roomForm").style.display = "none";
    document.getElementById("create-roomForm").style.display = "block";
    // giving random user name
    document.getElementById("create-username").value = generateName();
    document.getElementById("card_time").value = 10;
  } else {
    if (
      document.getElementById("create-username").value != "" &&
      document.getElementById("card_time").value != ""
    ) {
      var userName = document.getElementById("create-username").value;
      var roomId = uniqueId();
      var card_time = document.getElementById("card_time").value;
      socket.emit("joinRoom", {
        userName,
        roomId,
        packId,
        curr_pack,
        card_time
      });
      // after creating room
      document.getElementById("create-username").value = "";
      document.getElementById("create-roomForm").style.display = "none";
    } else {
      alert("Please enter the damn details for fuck sake");
    }
  }
});

joinRoomBtn.addEventListener("click", () => {
  if (document.getElementById("join-roomForm").style.display == "none") {
    document.getElementById("create-roomForm").style.display = "none";
    document.getElementById("join-roomForm").style.display = "block";
    document.getElementById("roomId").focus();
    // giving random user name
    document.getElementById("join-username").value = generateName();
  } else {
    if (
      document.getElementById("join-username").value != "" &&
      document.getElementById("roomId").value != ""
    ) {
      var userName = document.getElementById("join-username").value;
      if (document.getElementById("roomId").value.length == 4) {
        var roomId = parseInt(document.getElementById("roomId").value);
        socket.emit("joinRoom", { userName, roomId });
        // after joining
        document.getElementById("join-username").value = "";
        document.getElementById("roomId").value = "";
        document.getElementById("join-roomForm").style.display = "none";
      } else {
        alert("The Room ID is 4 digits dumbass!");
        document.getElementById("roomId").focus();
      }
    } else {
      alert("Please enter the damn user name and room ID for fuck sake");
      document.getElementById("roomId").focus();
    }
  }
});

// ready button
readyBtn.addEventListener("click", () => {
  socket.emit("ready", {});
});

// Next button
nextBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card left";

  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }

  cardsEl[currentActiveCard].className = "card active";
});

// Prev button
prevBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card right";

  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = "card active";
});

// Message submit
chatForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get message text
  const msg = e.target.elements.msg.value;

  // Emit message to server
  socket.emit("chatMessage", msg);

  // Clear input
  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

// utils
// socket methods
// Get room and users
socket.on("roomUsers", ({ room, users, roomData }) => {
  if (document.querySelector(".chat-container").style.display == "none") {
    document.querySelector(".chat-container").style.display = "block";
    document.querySelector(".progress-container").style.display = "block";
    createRoomBtn.style.display = "none";
    joinRoomBtn.style.display = "none";
    dumbq.style.display = "none";
    hindiholly.style.display = "none";
    document.querySelector(".navigation").style.display = "none";
    createCards(roomData.curr_pack, roomData.packId);
    card_time = roomData.card_time;
    curr_pack = roomData.curr_pack;
  }
  roomName.innerText = room;
  outputUsers(users);
});

// Message from server
socket.on("message", message => {
  outputMessage(message);
  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// error messages
socket.on("err", message => {
  alert(message);
  // history.go(0);
});

socket.on("allReady", async ({}) => {
  // start the timer function for cards
  for (let i = 0; i < curr_pack.length; i++) {
    await updateProgressBar(parseInt(card_time));
    document.querySelector(".card.active").click();
    await updateProgressBar(5);
    nextBtn.click();
  }
});

async function updateProgressBar(time) {
  return new Promise((resolve, reject) => {
    document.getElementById("progress").style.width = "0%";
    let timeleft = time;
    const downloadTimer = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        resolve();
      }
      var prev_width = document.getElementById("progress").style.width;
      document.getElementById("progress").style.width =
        parseInt(prev_width) + Math.floor(100 / time) + "%";
      timeleft -= 1;
    }, 1000);
  });
}

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="text">
    ${message.text}
  </p>
  <p class="meta">${message.username} <span>${message.time}</span></p>
  `;
  document.querySelector(".chat-messages").appendChild(div);
}

// Add users to DOM
function outputUsers(users) {
  document.querySelector(".chat-main").style.display = "inline-flex";
  userList.innerHTML = `
    ${users
      .map(user => `<li class="userName">${user.userName}</li>`)
      .join("")}`;
}

function changeCardColor(color) {
  var front = document.getElementsByClassName("inner-card-front");
  var back = document.getElementsByClassName("inner-card-back");
  for (let i = 0; i < front.length; i++) {
    front[i].style.background = color;
    back[i].style.background = color;
  }
}
// Create all cards
function createCards(cardPack, color) {
  cardsEl = [];
  currentActiveCard = 0;
  cardsContainer.innerHTML = "";
  cardPack.forEach((data, index) => createCard(data, index));
  changeCardColor(color);
}

// Create a single card in DOM
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `
  <div class="inner-card">
  <div class="inner-card-front">
    <p>
      ${data.question}
    </p>
  </div>
  <div class="inner-card-back">
    <p>
      ${data.answer}
    </p>
  </div>
</div>
  `;

  card.addEventListener("click", () => card.classList.toggle("show-answer"));

  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);
}
