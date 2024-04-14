var changebtn = document.querySelector(".btn-change");
var changediv = document.querySelector(".change");
var carddiv = document.querySelector(".card");
var forgetlink = document.querySelector(".forgetlink");
var changeheading = document.querySelector(".change-heading");
var changesubheading = document.querySelector(".change-sub-heading");

let flag = 0;
changebtn.addEventListener("click",()=>{
    if (flag==0) 
    {
        changebtn.innerHTML = "Sign In";
        var count1 = setInterval(()=>{
            changeheading.innerHTML = "Hello @ Friend !!!";
            changesubheading.innerHTML = "Register with your personal details to use sites all features";
        },400)
        setTimeout(()=>{
            clearInterval(count1)
        },450)
        changediv.animate([
            {borderRadius:"4% 30% 20% 4%" , left:"20%"},
        ],{
            duration : 1000,
            easing : "ease",
            iterations : 1,
            direction  : "normal",
            fill  : "forwards"
        });
        carddiv.style.overflow = "hidden";
        flag = 1;
    }
    else
    {
        changebtn.innerHTML = "Sign Up";
        var count2 = setInterval(()=>{
            changeheading.innerHTML = "Welcome Back !!!";
            changesubheading.innerHTML = "Enter your personal details to use all of the site features";
        },400)
        setTimeout(()=>{
            clearInterval(count2);
        },450)
        changediv.animate([
            {borderRadius:"30% 4% 4% 20%" , left:"50%"},
        ],{
            duration : 1000,
            easing : "ease",
            iterations : 1,
            direction  : "normal",
            fill  : "forwards"
        });
        carddiv.style.overflow = "hidden";
        flag = 0;
    }
})

forgetlink.addEventListener("click",(event)=>{
    event.preventDefault();
    if (flag==0) 
    {
        changebtn.innerHTML = "Sign In";
        var count1 = setInterval(()=>{
            changeheading.innerHTML = "Hello @ Friend !!!";
            changesubheading.innerHTML = "Register with your personal details to use sites all features";
        },400)
        setTimeout(()=>{
            clearInterval(count1)
        },450)
        changediv.animate([
            {borderRadius:"4% 30% 20% 4%" , left:"20%"},
        ],{
            duration : 1000,
            easing : "ease",
            iterations : 1,
            direction  : "normal",
            fill  : "forwards"
        });
        carddiv.style.overflow = "hidden";
        flag = 1;
    }
})