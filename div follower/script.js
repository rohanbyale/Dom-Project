window.addEventListener("mousemove",function(dets){
    var rect = document.querySelector("#react");
    var xval=gsap.utils.mapRange(
        0, window.innerWidth,
        200 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (200+rect.getBoundingClientRect().width/2),
        dets.clientX
    );



gsap.to("#react",{
    left:xval,
    ease:Power3
});
});

//....................
// gsap.to('#react',{
// left:dets.clientX+"px",
// ease:Power3
// })