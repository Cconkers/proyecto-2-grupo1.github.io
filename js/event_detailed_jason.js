function desplegarHamburguesa(x) {
    x.classList.toggle("change");
  };

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
     } else {
       x.style.display = "block";
     }
  };
 function efectoIrse(){
  const clasess = document.querySelector("#container_onclick");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block" && clasess.classList.contains ("container change")) {
     document.getElementById("myLinks").classList.remove('animate__bounceInDown');
     document.getElementById("myLinks").classList.add('animate__bounceOutUp');
  }
 }
