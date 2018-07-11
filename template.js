//Navigation Bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Add other codes below, comment what they are

//Game code
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);


//
// // dropdown
// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("amusement.html").classList.toggle("show");
// }
//
// // Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("Amusement");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//   }
// }/* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("Amusement").classList.toggle("show");
// }
//
// // Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("Amusement");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//   }
// }
