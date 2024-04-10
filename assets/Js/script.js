function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  var icon = document.getElementById("darktheme-icon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src = "./assets/Images/bx-sun.svg";
    }else{
      icon.src = "./assets/Images/bx-moon.svg";
    }
  }

