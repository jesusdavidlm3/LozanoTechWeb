import { useState } from "react"
import { Button } from "../components/Button/Button"
import { TextField } from "../components/TextField/TextField"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"

export const CheckPage = () => {

    const [device, setDevice] = useState({ device: 'desconocido', state: 'desconocido' })

    async function checkStatus(e) {
        e.preventDefault()
        const docRef = doc(db, 'repairStatus', controlNumber.value);
        const docSnap = await getDoc(docRef);
        setDevice(docSnap.data());
    }



    return(
        <div className="checkBackground">
            <div className="mainCheckContainer">
                <div className="checkContainer1">
                    <form id="checker" onSubmit={checkStatus} className="Form">
                        <TextField id='controlNumber' label='Numero de control'></TextField>
                        <Button type='submit' variant='allow' label='Consultar'></Button>
                    </form>
                </div>

                <div className="checkContainer2">
                    <div className="checkedInfo">
                        { device ? (
                            <>
                                <h3>Su equipo a reparar es:</h3>
                                <>{device.device}</>
                                <h3>Su estado actual es:</h3>
                                <>{device.state}</>
                            </>
                        ) : (
                            <>
                                <h1 className="errorMessage">Error</h1>
                                <p className="errorMessage">Por favor intente con un numero de control diferente</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}