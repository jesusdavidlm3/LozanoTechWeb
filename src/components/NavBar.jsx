import { Button } from "./Button/Button";

const NavBar = ({onClickLogin, onClickCheck, onClickStart, onClickServices, onClickAboutUs, onClickComments}) => {
    return(
        <div className='NavBar'>
            <div className="info">
                <img src="../src/img/LozanoTechIsotipoWhite.png" className="logo"/>
                <h3 onClick={onClickStart}>Inicio</h3>
                <h3 onClick={onClickAboutUs}>Sobre nosotros</h3>
                <h3 onClick={onClickServices}>Servicios</h3>
                <h3 onClick={onClickComments}>Comentarios</h3>
            </div>

            <div className="actions">
                <Button onClick={onClickLogin} label='Acceso para tecnicos' variant='action'></Button>
                <Button onClick={onClickCheck} label='Consultar reparacion' variant='action'></Button>
            </div>
        </div>
    )
}

export default NavBar;