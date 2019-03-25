let mobileNavBtn = document.getElementById("mobile-navigation")
let mobileNav = document.getElementsByClassName("side-nav")
let closeBtn = document.getElementsByName("close")[0];

mobileNavBtn.addEventListener("click", () => {
    mobileNav[0].style.width = "50%";
    
});

closeBtn.addEventListener("click", () => {
  mobileNav[0].style.width = "0px"
});

