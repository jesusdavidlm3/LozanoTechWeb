import menuIcon from '/src/img/icons/menu.png'
import isoTipoWhite from '/src/img/LozanoTechIsotipoWhite.png'
import { Button } from "./Button/Button";
import { useState } from "react";

const NavBar = ({onClickLogin, onClickCheck, onClickStart, onClickServices, onClickAboutUs, onClickComments, onClickMenu}) => {

    const [displayMenu, setDisplayMenu] = useState(false)

    return(
        <div className='NavBar'>

            { displayMenu && 
                <div className="menu">
                    <img className="burguerMenuIcon" src={menuIcon} onClick={ () => {setDisplayMenu(!displayMenu)}}/>
                    <h3 onClick={onClickStart}>Inicio</h3>
                    <h3 onClick={onClickServices}>Servicios</h3>
                    <h3 onClick={onClickComments}>Comentarios</h3>
                    <h3 onClick={onClickAboutUs}>Sobre nosotros</h3>
                </div> 
            }

            { !displayMenu && 
                <img className="burguerMenuIcon" src={menuIcon} onClick={ () => {setDisplayMenu(!displayMenu)}}/>
            }
            

            <div className="info">
                <img src={isoTipoWhite} className="logo"/>
                <h3 onClick={onClickStart}>Inicio</h3>
                <h3 onClick={onClickAboutUs}>Sobre nosotros</h3>
                <h3 onClick={onClickServices}>Servicios</h3>
                <h3 onClick={onClickComments}>Comentarios</h3>
            </div>

            <div className="actions">
                <Button className='access' onClick={onClickLogin} label='Acceso para tecnicos' variant='action'></Button>
                <Button onClick={onClickCheck} label='Consultar reparacion' variant='action'></Button>
            </div>
        </div>
    )
}

export default NavBar;