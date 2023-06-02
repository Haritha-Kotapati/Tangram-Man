
var tangram = document.getElementsByClassName("tangram")[0];

var button_standing = document.getElementsByClassName("button--standing")[0];
var button_walking = document.getElementsByClassName("button--walking")[0];
var button_running = document.getElementsByClassName("button--running")[0];
var button_sitting = document.getElementsByClassName("button--sitting")[0];

button_standing.addEventListener("click", function() {
  tangram.className = tangram.className.replace(/tangram--(\S*)/,'tangram--standing');
});

button_walking.addEventListener("click", function() {
  tangram.className = tangram.className.replace(/tangram--(\S*)/,'tangram--walking');
});

button_running.addEventListener("click", function() {
  tangram.className = tangram.className.replace(/tangram--(\S*)/,'tangram--running');
});

button_sitting.addEventListener("click", function() {
  tangram.className = tangram.className.replace(/tangram--(\S*)/,'tangram--sitting');
});
