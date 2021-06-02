window.onload = () => {
    var cargando = document.getElementById('cargando');
    var mensaje = document.getElementById('mensaje');
    var form = document.getElementById('form');

    form.addEventListener('submit', function(e) {
        cargando.style.display = 'block';
        e.preventDefault();
        var email = document.getElementById('staticEmail').value;
        var password = document.getElementById('inputPassword').value;

        axios.post('http://192.168.1.217:3000/api/v1/users/login', {
                email: email,
                password: password,
            })
            .then(function(respuesta) {
                console.log(respuesta);
                if (respuesta.status == 200) {
                    mensaje.innerHTML = 'Has logeado correctamente, el token ha sido guardado en memoria.';
                    localStorage.setItem('token', res.data.token);
                } las demas paginas tienen la misma plantilla?
            })
            .catch(function(err) {
                console.log(err);
				mensaje.innerHTML = 'No se ha podido logear';
            })
            .then(function() {
                cargando.style.display = 'none';
            });
    });


}