var auth = firebase.apps[0].auth();

function validar() {
    var uid = -1
    auth.onAuthStateChanged((user) => {
        if (user) {
            uid = user.uid;
        } else {
            document.location.href = 'login.html';
        }
    });
    return uid;
}

function salir() {
    auth.signOut().then(() => {
        document.location.href = 'login.html';
    }).catch((error) => {
        alert('Error al cerrar la sesión: ' + error.message);
    });
}