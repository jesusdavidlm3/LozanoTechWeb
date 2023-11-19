import { Button } from "./Button/Button";

const NavBar = ({onClickLogin, onClickreg, onClickCheck}) => {
    return(
        <div className='NavBar'>
            <div className="info">
                <img src="../src/img/LozanoTechIsotipoWhite.png" className="logo"/>
                <h3>Inicio</h3>
                <h3>Sobre nosotros</h3>
                <h3>Servicios</h3>
                <h3>Comentarios</h3>
            </div>

            <div className="actions">
                <Button onClick={onClickLogin} label='Iniciar sesion'></Button>
                <Button label='registrarse'></Button>
                <Button label='Consultar reparacion'></Button>
            </div>
        </div>
    )
}

export default NavBar;