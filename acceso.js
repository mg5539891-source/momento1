function acceso()

    const USUARIO_CORRECTO = "admin";
    const CONTRSEÑA_correcta = "123"

    const MAX_INTENTOS = 3;

    let intentos = 0;
    let accesoConcedido = false;

    while (intentos < MAX_INTENTOS && !accesoConcedido) 
        intentos++;

        const usuarioIngresado = prompt(`Intento ${intentos} de ${MAX_INTENTOS}\nIngrese su usuario:`);
        const contraseñaIngresada = prompt(`Intento ${intentos} de ${MAX_INTENTOS}\nIngrese su contraseña:`);

        if (usuarioIngresado === USUARIO_CORRECTO && contraseñaIngresada === CONTRASEÑA_CORRECTA) {
            accesoConcedido = true;
            console.log("¡Bienvenido al sistema!");
            } else {
            if (intentos < MAX_INTENTOS) {
                console.log(`Datos incorrectos. Intento ${intentos} de ${MAX_INTENTOS}. Intente nuevamente.`);
            }
    }
