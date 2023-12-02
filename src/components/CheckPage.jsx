import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField"
import { db } from "../../firebase"

export const CheckPage = () => {

    async function handleSubmit(){
        try{
            const device = await db.collection('repairStatus').document('1').get();
        }catch{
            console.log('parece que algo salio mal')
        }
    }



    return(
        <div className="checkBackground">
            <div className="mainCheckContainer">
                <div className="checkContainer1">
                    <form className="Form">
                        <TextField id='controlNumber' label='Ingrese aqui su numero de control'></TextField>
                        <Button onClick={handleSubmit} variant='allow' label='Consultar'></Button>
                    </form>
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