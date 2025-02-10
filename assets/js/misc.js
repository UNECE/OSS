const myTimeout = setTimeout(hideGlass, 3000);

function hideGlass() {
  var x = document.getElementById("quarto-sidebar-glass")
  x.style.display = "none";
   console.log("hideGlass script run (3 sec delay ver.)"); 
/*  alert("I am an alert box!"); Test command*/
}


