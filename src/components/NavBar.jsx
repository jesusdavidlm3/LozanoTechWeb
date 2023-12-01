import { Button } from "./Button/Button";

const NavBar = ({onClickLogin, onClickReg, onClickCheck, onClickStart}) => {
    return(
        <div className='NavBar'>
            <div className="info">
                <img src="../src/img/LozanoTechIsotipoWhite.png" className="logo"/>
                <h3 onClick={onClickStart}>Inicio</h3>
                <h3>Sobre nosotros</h3>
                <h3>Servicios</h3>
                <h3>Comentarios</h3>
            </div>

            <div className="actions">
                <Button onClick={onClickLogin} label='Iniciar sesion' variant='action'></Button>
                <Button onClick={onClickReg} label='registrarse' variant='action'></Button>
                <Button onClick={onClickCheck} label='Consultar reparacion' variant='action'></Button>
            </div>
        </div>
    )
}

export default NavBar;