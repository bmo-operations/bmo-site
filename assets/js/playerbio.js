function getAllBios() {
   var request = new XMLHttpRequest();
   request.open("GET", "assets/bios.json", false);
   request.send(null)
   return JSON.parse(request.responseText)
}

function getPlayerBio(player) {
   let allBios = getAllBios()
   return allBios[player]
}

// When the user clicks on the button, open the modal
function onbtnclick(modalid, player) {
   // display
   document.getElementById(modalid).style.display = "block";
   document.getElementById(modalid).innerHTML = PopupContent(player);
}

// When the user clicks on <span> (x), close the modal
function oncloseclick(modalid) {
   document.getElementById(modalid).style.display = "none";
}

function PopupContent(playerID) {
   var bio = getPlayerBio(playerID);
   return `
   <div class="modal-content" onclick="event.stopPropagation()">
      <div class="popup-image-container">
         <img class="popup-image" src="${bio.img}" alt="${bio.name}" />
         <div id="popup-close" onclick="oncloseclick('popup')">
            <span class="material-icons-outlined" >clear</span>
         </div>
      </div>
      <div id="popup-content">
         <div class="popup-header-text">
            <h1 id='popup-name'>${bio.name}</h1>
            ${Nickname(bio.nickname)}
         </div>
         <div class="popup-section">
            <p class="popup-section-header">Info</p>
            ${InfoItem("person", bio.height)}
            ${InfoItem("date_range", `Class of ${bio.class}`)}
            ${InfoItem("local_library", bio.concentration)}
            ${InfoItem("home_work", bio.hometown)}
            ${InfoItem("school", bio.highschool)}
         </div>
         <div class="popup-section">
            <p class="popup-section-header">Bio</p>
            ${BioQuestion(bio.q1, bio.a1)}
            ${BioQuestion(bio.q2, bio.a2)}
            ${BioQuestion(bio.q3, bio.a3)}
         </div>
      </div>
   </div>
   `
}

function populateRosterHTML() {
   let bios = Object.values(getAllBios())
   let parser = new DOMParser()
   bios.forEach(bio => {
      let card = `
      <div class="roster-card">
         <img class="player-image" src="${bio.img}" alt="${bio.name}" loading=lazy />
         <div class="player-container">
            <div class="player-text">
               <p class="player-name">${bio.name}${(bio.captain) ? " (captain)" : ""}</p>
               ${Nickname(bio.nickname)}
            </div>
            <div class="player-info">
               ${InfoItem("date_range", `Class of ${bio.class}`)}
               ${InfoItem("home_work", bio.hometown)}
            </div>
            <button class="button" onclick="onbtnclick('popup', '${bio.id}')">More</button>
         </div>
      </div>
      `
      console.log(`bio html = ${parser.parseFromString(card, "text/html")}`)
      document.querySelector(".roster-grid").appendChild(parser.parseFromString(card, "text/html").body)
   });
}

function InfoItem(iconName, text) {
   return `
   <div class="player-info-item">
      <span class="material-icons-outlined">${iconName}</span>
      <p class="player-info-item-text">${text}</p>
   </div>
   `
}

function Nickname(nickname) {
   return `
   <p class="player-nickname-container">
      <span class="player-aka">aka</span> 
      <span class="player-nickname">${nickname}</span>
   </p>
   `
}

function BioQuestion(question, answer) {
   return `
   <div class="popup-bio-item">
      <p class="popup-bio-q">${question}</p>
      <p class="popup-bio-a">${answer}</p>
   </div>
   `
}

window.onload = function() { 
   console.log("window loaded")
   populateRosterHTML()
 }
