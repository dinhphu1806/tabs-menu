var icon = document.getElementById("icon");

icon.onclick = function() {
     document.body.classList.toggle("dark-theme")
     if(document.body.classList.contains("dark-theme")){
       icon.src = "./img/moon_dark_mode_night-2-512.webp";
     }else
       icon.src = "./img/Sun-Icon-260075.webp";
}