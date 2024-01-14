import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField"

export const AddModal = () => {

    const handleSubmit = (e) => {
        e.preventDefault
    }

    // const handleClose = (e) =>{
    //     e.preventDefault
    // }

    return(
        <div className="ModalContainer">
            <div className="AddModal">
                <h1>Ingrese los datos del nuevo registro</h1>
                <form onSubmit={handleSubmit}>
                    <TextField label='Nro de control'></TextField>
                    <TextField label='Nombre'></TextField>
                    <TextField label='Equipo'></TextField>
                    <TextField label='Estado'></TextField>
                    <Button className='modalButtonAdd' label='Agregar' type='submit' variant='allow'></Button>
                </form>

                <Button className='modalButtonClose' label='Cerrar' variant='deny'></Button>
            </div>

        </div>
    )
}