

//CUENTA ATRÁS------------------------

// Seleccionar la fecha de cuenta atrás.
var countDownDate = new Date("Jun 20, 2021 15:30:00").getTime();

// Actualizar el contador cada segundo.
var x = setInterval(function() {

  // Obtener la fecha de hoy
  var now = new Date().getTime();

  // Cálculo de la distancia entre la fecha del evento y hoy.
  var distance = countDownDate - now;

  // Calcular tiempo de días, horas, minutos y segundos.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar resultado de la cuenta atrás en los objetos html con  id="dias", id="horas", id="minutos", id="segundos".
  document.getElementById("dias").innerHTML = days + " :";

  document.getElementById("horas").innerHTML =  hours+ " :";

  document.getElementById("minutos").innerHTML = minutes+ " :";

  document.getElementById("segundos").innerHTML = seconds;

  // Cuando finalice la cuenta atrás poner texto: TERMINADO.
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("terminado").innerHTML = "TERMINADO";
    document.getElementById("horas").style.display = "none";
    document.getElementById("dias").style.display = "none"
    document.getElementById("minutos").style.display = "none"
    document.getElementById("segundos").style.display = "none"
  }
}, 1000);


