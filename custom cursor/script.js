var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

// - details 
// main.addEventListener("mousemove" , function(dets){
// console.log(dets.x)
// });

main.addEventListener("mousemove" , function(dets){
crsr.style.left=dets.x+"px";
crsr.style.top=dets.y+"px";
});