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
   // parse relevant data
   var info = getPlayerBio(player);
   console.log(`player bio = ${info}`)
   // set text
   document.getElementById("height").innerText = "Height: " + info.height;
   document.getElementById("hometown").innerText = "Hometown: " + info.hometown;
   document.getElementById("highschool").innerText = "High School: " + info.highschool;
   document.getElementById("concentration").innerText = "Concentration: " + info.concentration;
   document.getElementById("q1").innerText = info.q1 + ":\n" + info.a1;
   document.getElementById("q2").innerText = info.q2 + ":\n" + info.a2;
   document.getElementById("q3").innerText = info.q3 + ":\n" + info.a3;

   // display
   document.getElementById(modalid).style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function onspanclick(modalid) {
   document.getElementById(modalid).style.display = "none";
}

function populateHTML() {
   console.log("populating html")
   let bios = Object.values(getAllBios())
   console.log(`bios = ${bios}`)
   let parser = new DOMParser()
   bios.forEach(bio => {
      let card = `
      <div class="roster-card">
         <img class="player-image" src="${bio.img}" alt="${bio.name}" />
         <div class="player-container">
            <div class="player-text">
               <p class="player-name">${bio.name}${(bio.captain) ? " (captain)" : ""}</p>
               <p class="player-nickname-container"><span class="player-aka">aka</span> <span
                     class="player-nickname">${bio.nickname}</span></p>
            </div>
            <div class="player-info">
               <div class="player-info-item">
                  <span class="material-icons-outlined">school</span>
                  <p class="player-info-item-text">Class of ${bio.class}</p>
               </div>
               <div class="player-info-item">
                  <span class="material-icons-outlined">home_work</span>
                  <p class="player-info-item-text">${bio.hometown}</p>
               </div>
            </div>
            <button class="button" onclick="onbtnclick('popup', '${bio.id}')">More</button>
         </div>
      </div>
      `
      console.log(`bio html = ${parser.parseFromString(card, "text/html")}`)
      document.querySelector(".roster-grid").appendChild(parser.parseFromString(card, "text/html").body)
   });
}

window.onload = function() { 
   console.log("window loaded")
   populateHTML()
 }
