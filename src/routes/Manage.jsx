import { TextField } from "../components/TextField/TextField"; 
import searchLogo from '../img/icons/search.png';
import deleteLogo from '../img/icons/borrar.png';
import editLogo from '../img/icons/editar.png';
import viewLogo from '../img/icons/vision.png';


const Manage = () => {
    return(
        <div className="Manage">
            <div className="searchBar">
                <TextField label='Ingrese su busqueda'></TextField>
                <img src={searchLogo}/>
            </div>

            <div className="resultBox">
                <div className="result">
                    <h2>nombre, equipo</h2>

                    <div className="icons">
                        <img src={deleteLogo}/>
                        <img src={viewLogo}/>
                        <img src={editLogo}/>
                    </div>
                </div>
                <div className="result">
                    <h2>nombre, equipo</h2>

                    <div className="icons">
                        <img src={deleteLogo}/>
                        <img src={viewLogo}/>
                        <img src={editLogo}/>
                    </div>
                </div><div className="result">
                    <h2>nombre, equipo</h2>

                    <div className="icons">
                        <img src={deleteLogo}/>
                        <img src={viewLogo}/>
                        <img src={editLogo}/>
                    </div>
                </div>
                <div className="result">
                    <h2>nombre, equipo</h2>

                    <div className="icons">
                        <img src={deleteLogo}/>
                        <img src={viewLogo}/>
                        <img src={editLogo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage;