import { TextField } from "../components/TextField/TextField";
import { Button } from "../components/Button/Button";
import { AddModal } from "../components/AddModal"; 
import { DeleteModal } from "../components/DeleteModal";
import { ViewModal } from "../components/ViewModal"; 
import { EditModal } from "../components/EditModal"; 
import { useState, useContext, useEffect } from "react";
import searchLogo from '../img/icons/search.png';
import deleteLogo from '../img/icons/borrar.png';
import editLogo from '../img/icons/editar.png';
import viewLogo from '../img/icons/vision.png';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; 
import { Capitalize } from "../functions/NormalizeInfo";
import { loggedUserContext } from "../context/loggedUserContext";
import { useNavigate } from "react-router-dom";


const Manage = () => {

    const navigate = useNavigate()
    const {logged, setLogged, setUserRealName, setAdmin} = useContext(loggedUserContext)
    const [selectedDoc, setSelectedDoc] = useState()
    const [docInfo, setDocInfo] = useState()
    let oneDoc = []
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [viewModal, setViewModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [obtainedDocs, setObtainedDocs] = useState([])

    useEffect( () => {
        if(logged == false){
            navigate('/home')
        }
    } )

    function handleAddModal(){
        setAddModal(!addModal)
    }

    function handleDeleteModal(docId){
        setDeleteModal(!deleteModal)
        setSelectedDoc(docId)
    }

    function handleViewModal(docInfo){
        setViewModal(!viewModal)
        setDocInfo(docInfo)
    }

    function handleEditModal(docId, docInfo){
        setEditModal(!editModal)
        setSelectedDoc(docId)
        setDocInfo(docInfo)
    }

    async function handleSearch(e){
        e.preventDefault()
        const q = query(collection(db, "repairStatus"), where("client", "==", Capitalize(e.target[0].value)));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            oneDoc = [...oneDoc, {id: doc.id, data: doc.data()}]
        });
        setObtainedDocs(oneDoc)
    }

    async function showAll(){
        const querySnapshot = await getDocs(collection(db, "repairStatus"));
        querySnapshot.forEach((doc) => {
            oneDoc = [...oneDoc, {id: doc.id, data: doc.data()}]
        });
        setObtainedDocs(oneDoc)
    }

    function handleLogOut(){
        setLogged(false)
        setAdmin(false)
        setUserRealName('')
        navigate('/home')
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
                <Button label='Mostrar todo' variant='action' onClick={ () => showAll()}></Button>
                <Button label='Agregar' variant='action' onClick={ () => handleAddModal()}></Button>
                <Button label='Salir' variant='deny' onClick={ () => handleLogOut() }></Button>
            </div>

            <div className="resultBox">
                {obtainedDocs.map( (doc) => (
                    <div className="result">
                        <h2>{doc.data.client} | <span>{doc.data.device}</span></h2>

                        <div className="icons">
                            <img src={deleteLogo} onClick={ () => handleDeleteModal(doc.id) }/>
                            <img src={viewLogo} onClick={ () => handleViewModal(doc.data) }/>
                            <img src={editLogo} onClick={ () => handleEditModal(doc.id, doc.data) }/>
                        </div>
                    </div>
                ))}
            </div>

            { addModal && <AddModal closeModal={ () => handleAddModal() }></AddModal> }
            { deleteModal && <DeleteModal docId={selectedDoc} closeModal={ () => handleDeleteModal() }></DeleteModal> }
            { viewModal && <ViewModal docInfo={docInfo} closeModal={ () => handleViewModal() }></ViewModal> }
            { editModal && <EditModal docId={selectedDoc} docInfo={docInfo} closeModal={ () => handleEditModal() }></EditModal> }
        </div>
    )
}

export default Manage;