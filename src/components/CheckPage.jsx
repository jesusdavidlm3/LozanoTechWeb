import { useState } from "react"
import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"

export const CheckPage = () => {

    const [device, setDevice] = useState({ device: 'desconocido', state: 'desconocido' })

    async function checkStatus() {
        try{
            const docRef = doc(db, 'repairStatus', controlNumber.value);
            const docSnap = await getDoc(docRef);
            setDevice(docSnap.data());
        }catch(error){
            const errorCode = error.code;
        }

        if(errorCode != null){
            setDevice({device: 'error', state: 'error'})
        }
    }



    return(
        <div className="checkBackground">
            <div className="mainCheckContainer">
                <div className="checkContainer1">
                    <div className="Form">
                        <TextField id='controlNumber' label='Numero de control'></TextField>
                        <Button onClick={checkStatus} variant='allow' label='Consultar'></Button>
                    </div>
                </div>

                <div className="checkContainer2">
                    <div className="checkedInfo">
                        <h3>Su equipo a reparar es:</h3>
                        <p>{device.device}</p>
                        <h3>Su estado actual es:</h3>
                        <p>{device.state}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}