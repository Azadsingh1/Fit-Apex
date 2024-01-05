var menuicon = document.querySelector("#menu");
var cut = document.querySelector("#cut");
var navlinks = document.querySelector(".nav-links");
var li = document.querySelector("#nav-links ol li");


menuicon.addEventListener("click",function(){
   navlinks.style.top = 0;
})
cut.addEventListener("click",function(){
    navlinks.style.top = "-480%";
})
li.addEventListener("click",function(){
    li.style.top= "-480%"
})