
function getJson(player) {
   var request = new XMLHttpRequest();
   request.open("GET", "assets/bios.json", false);
   request.send(null)
   return JSON.parse(request.responseText)[player];
}

// When the user clicks on the button, open the modal
function onbtnclick(modalid, player) {
   // parse relevant data
   var info = getJson(player);

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