const NavBar = () => {
    return(
        <div>
            <div className="info">
                <img src="../src/img/LozanoTechIsotipoWhite" className="logo"/>
                <h3>Inicio</h3>
                <h3>Sobre nosotros</h3>
                <h3>Servicios</h3>
                <h3>Comentarios</h3>
            </div>

            <div className="actions">
                <button>consultar reparacion</button>
                <button>Registrarse</button>
                <button>Iniciar Sesion</button>
            </div>

        </div>
    )
}

export default NavBar;