import { TextField } from "../components/TextField/TextField";
import { Button } from "../components/Button/Button";
import { AddModal } from "../components/AddModal"; 
import { useState } from "react";
import searchLogo from '../img/icons/search.png';
import deleteLogo from '../img/icons/borrar.png';
import editLogo from '../img/icons/editar.png';
import viewLogo from '../img/icons/vision.png';


const Manage = () => {

    const [modal, setModal] = useState(false)

    function handleModal(){
        setModal(!modal)
    }

    return(
        <div className="Manage">
            <div className="searchBar">
                <TextField label='Ingrese su busqueda'></TextField>
                <img src={searchLogo}/>
                <Button label='Agregar' variant='action' onClick={ () => handleModal()}></Button>
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
            { modal && <AddModal closeModal={ () => handleModal() }></AddModal> }
        </div>
    )
}

export default Manage;