import menuIcon from '/src/img/icons/menu.png'
import isoTipoWhite from '/src/img/LozanoTechIsotipoWhite.png'
import { Button } from "./Button/Button";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()
    const [displayMenu, setDisplayMenu] = useState(false)

    return(
        <div className='NavBar'>

            { displayMenu && 
                <div className="menu">
                    <img className="burguerMenuIcon" src={menuIcon} onClick={ () => {setDisplayMenu(!displayMenu)}}/>
                    <Link className='link' to={'/home'}> <h3>Inicio</h3> </Link>
                    <Link className='link' to={'services'}> <h3>Servicios</h3> </Link>
                    <Link className='link' to={'contact'}> <h3>Contacto</h3> </Link>
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
                <Button onClick={ () => {navigate('login')} } className='access' label='Acceso para tecnicos' variant='action'></Button>
                <Button onClick={() => {navigate('check')}} label='Consultar reparacion' variant='action'></Button>
            </div>
        </div>
    )
}

export default NavBar;