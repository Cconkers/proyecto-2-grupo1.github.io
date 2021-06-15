
//------------------------------------------------------------------------------------------INICIAR SESIÓN
window.onload = () => {
    var loading = document.getElementById('loading');
    var mensaje = document.getElementById('mensaje');
    var form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
        loading.style.display = 'inline-block';
        
        e.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
        axios.post('http://163.172.135.235:3000/api/v1/users/login', {
            
            email: email,
            password: password,
            
        })
        .then(function(res) {
            console.log(res.data);
            if (res.status == 200) {
                mensaje.innerHTML = 'Has logeado correctamente, el token ha sido guardado en memoria.';
                localStorage.setItem('token', res.data.token);
            }
        })
        .catch(function(err) {
            mensaje.innerHTML = 'Usuario o contraseña incorrectos.';
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
    });
}

var enlace = document.getElementById("enlaceNoValido");
enlace.addEventListener('click', function() {
alert("Función aún no disponible.")});



//------------------------------------------------------------------------------------------VER EVENTOS

//     var boton = document.getElementById('submit');
//     var mensaje1 = document.getElementById('mensaje1');
//     var listDiv = document.getElementById('listDiv');
//     boton.addEventListener('click', function() {
//         loading.style.display = 'block';
//         mensaje1.innerHTML = '';
//         axios.get('http://163.172.135.235/api/v1/events', {
//                 responseType: 'json'
//             })
//             .then(function(res) {
//                 if (res.status == 200) {
//                     listDiv.style.display = 'block';
//                     mensaje1.innerHTML = 'Lista de eventos';
//                     var todoList = document.getElementById('todo-list');
//                     var arrayData = res.data.data;
//                     todoList.innerHTML = '';
//                     for (let i = 0; i < arrayData.length; i++) {
//                         todoList.innerHTML += '<li>' + arrayData[i].name + '</li>';
//                     }
//                 }
//             })
//             .catch(function(err) {
//                 console.log(err);
//             })
//             .then(function() {
//                 loading.style.display = 'none';
//             });
//     });


//------------------------------------------------------------------------------------------CREAR EVENTO
//     var boton = document.getElementById('formPost');
//     boton.addEventListener('submit', function(e) {
//         e.preventDefault();
//         if (localStorage.getItem('token') != null) {
//             var token = localStorage.getItem('token');
//         } else {
//             var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGFhYzc4NzU2ZmNmYzFiZGQ5YWE2OWEiLCJlbWFpbCI6InBhY29AcGFjby5lcyIsImlhdCI6MTYyMTg4MzgxNiwiZXhwIjoxNjIxOTU1ODE2fQ.b-llibgs0br0YhZHq7nxoSwnisrfDmeFlCKJNoJe060';
//         }
//         loading.style.display = 'block';
//         axios.post('http://163.172.135.235/api/v1/events', {

//                 date: '2021-12-30',
//                 name: document.getElementById('name').value,
//                 description: document.getElementById('description').value,
//                 type: true,
//                 photo: './assets/img/foto.jpg'

//             }, {
//                 headers: {
//                     token: token
//                 }
//             })
//             .then(function(res) {
//                 console.log(res);
//                 console.log(res.data);
//                 if (res.status == 201) {
//                     mensaje.innerHTML = 'El nuevo evento ha sido almacenado con id: ' + res.data._id;
//                 }
//             })
//             .catch(function(err) {
//                 console.log(err);
//             })
//             .then(function() {
//                 loading.style.display = 'none';
//             });
//     });
// }