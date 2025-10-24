var istatus= document.querySelector("h5");

var btn= document.querySelector("#ad");

var Check = 0;



btn.addEventListener("click",function(){
    if(Check == 0){
   
istatus.innerHTML="friend";
istatus.style.color="green";
btn.innerHTML="Remove Friend"
Check =1;
    } else{
  

        istatus.innerHTML="Stranger";
istatus.style.color="red";
btn.innerHTML="Add Friend";
Check =0;

    }

})


