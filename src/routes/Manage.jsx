import { TextField } from "../components/TextField/TextField";
import { Button } from "../components/Button/Button";
import { AddModal } from "../components/AddModal"; 
import { useState } from "react";
import searchLogo from '../img/icons/search.png';
import deleteLogo from '../img/icons/borrar.png';
import editLogo from '../img/icons/editar.png';
import viewLogo from '../img/icons/vision.png';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; 


const Manage = () => {

    let oneDoc = []
    const [modal, setModal] = useState(false)
    const [obtainedDocs, setObtainedDocs] = useState([])

    function handleModal(){
        setModal(!modal)
    }

    async function handleSearch(e){
        e.preventDefault()
        const q = query(collection(db, "repairStatus"), where("client", "==", e.target[0].value));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            oneDoc = [...oneDoc, doc.data()]
            console.log(oneDoc)
        });
        setObtainedDocs(oneDoc)
    }

    return(
        <div className="Manage">
            <div className="searchBar">
                <form className="searchComponent" onSubmit={handleSearch}>
                    <TextField label='Ingrese su busqueda' id='searchInput'></TextField>
                    <button type="submit">
                        <img src={searchLogo}/>
                    </button>
                </form>
                
                <Button label='Agregar' variant='action' onClick={ () => handleModal()}></Button>
            </div>

            <div className="resultBox">

                {obtainedDocs.map( (doc) => (
                    <div className="result">
                        <h2>{doc.client} | <span>{doc.device}</span></h2>

                        <div className="icons">
                            <img src={deleteLogo}/>
                            <img src={viewLogo}/>
                            <img src={editLogo}/>
                        </div>
                    </div>
                ))}
            </div>

            { modal && <AddModal closeModal={ () => handleModal() }></AddModal> }
        </div>
    )
}

export default Manage;