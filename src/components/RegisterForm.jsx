const RegisterForm = () => {
    return(
        <>
            <form>
                <input type="text">Nombre</input>
                <input type="email">Correo Electronico</input>
                <input type="tel"> Telefono</input>
                <input type="number">Identificacion</input>
                <input type="password">Contraseña</input>

                <button type="submit">Registrarse</button>
            </form>
        </>
    )
}

export default RegisterForm;