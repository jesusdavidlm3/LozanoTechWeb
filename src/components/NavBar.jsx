import menuIcon from '/src/img/icons/menu.png'
import isoTipoWhite from '/src/img/LozanoTechIsotipoWhite.png'
import { Button } from "./Button/Button";
import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';

const NavBar = ({onClickLogin, onClickCheck, onClickStart, onClickServices, onClickAboutUs, onClickComments, onClickMenu}) => {

    const [displayMenu, setDisplayMenu] = useState(false)

    return(
        <div className='NavBar'>

            { displayMenu && 
                <div className="menu">
                    <img className="burguerMenuIcon" src={menuIcon} onClick={ () => {setDisplayMenu(!displayMenu)}}/>
                    <Link to={'/home'}> <h3>Inicio</h3> </Link>
                    <Link to={'services'}> <h3>Servicios</h3> </Link>
                    <Link to={'comments'}> <h3>Comentarios</h3> </Link>
                    <Link to={'aboutUs'}> <h3>Sobre nosotros</h3> </Link>
                </div> 
            }

            { !displayMenu && 
                <img className="burguerMenuIcon" src={menuIcon} onClick={ () => {setDisplayMenu(!displayMenu)}}/>
            }
            

            <div className="info">
                <img src={isoTipoWhite} className="logo"/>
                <Link to={'/home'}> <h3>Inicio</h3> </Link>
                <Link to={'aboutUs'}> <h3>Sobre nosotros</h3> </Link>
                <Link to={'services'}> <h3>Servicios</h3> </Link>
                <Link to={'comments'}> <h3>Comentarios</h3> </Link>
            </div>

            <div className="actions">
                <Button className='access' onClick={onClickLogin} label='Acceso para tecnicos' variant='action'></Button>
                <Button onClick={onClickCheck} label='Consultar reparacion' variant='action'></Button>
            </div>
        </div>
    )
}

export default NavBar;