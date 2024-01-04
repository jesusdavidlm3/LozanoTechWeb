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
                    <Link className='link' to={'/home'}> <h3>Inicio</h3> </Link>
                    <Link className='link' to={'services'}> <h3>Servicios</h3> </Link>
                    <Link className='link' to={'comments'}> <h3>Comentarios</h3> </Link>
                    <Link className='link' to={'aboutUs'}> <h3>Sobre nosotros</h3> </Link>
                </div> 
            }

            { !displayMenu && 
                <img className="burguerMenuIcon" src={menuIcon} onClick={ () => {setDisplayMenu(!displayMenu)}}/>
            }
            

            <div className="info">
                <img src={isoTipoWhite} className="logo"/>
                <Link className='link' to={'/home'}> <h3>Inicio</h3> </Link>
                <Link className='link' to={'aboutUs'}> <h3>Sobre nosotros</h3> </Link>
                <Link className='link' to={'services'}> <h3>Servicios</h3> </Link>
                <Link className='link' to={'comments'}> <h3>Comentarios</h3> </Link>
            </div>

            <div className="actions">
                <Link to={'/login'}> <Button className='access' label='Acceso para tecnicos' variant='action'></Button> </Link>
                <Link to={'/check'}> <Button onClick={onClickCheck} label='Consultar reparacion' variant='action'></Button> </Link>
            </div>
        </div>
    )
}

export default NavBar;