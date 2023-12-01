import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField"

export const CheckPage = () => {

    const device = {
        device: 'Lenovo Ideapad 3',
        state: 'Reparacion exitosa, listo para retirar'
    }

    return(
        <div className="checkBackground">
            <div className="mainCheckContainer">
                <div className="checkContainer1">
                    <form className="Form">
                        <TextField label='Ingrese aqui su numero de control'></TextField>
                        <Button variant='allow' label='Consultar'></Button>
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