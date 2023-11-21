import { Button } from './Button/Button'
import { TextField } from './TextField/TextField';

const RegisterForm = () => {
    return(
        <>
            <form className='Form'>
                <h1>Registrarse</h1>
                <TextField label='Nombre' type='text'></TextField>
                <TextField label='Correo electronico' type='email'></TextField>
                <TextField label='Telefono' type='Telefono'></TextField>
                <TextField label='Contraseña' type='password'></TextField>

                <Button className='submit' label='Registrarse' variant='allow'></Button>
            </form>
        </>
    )
}

export default RegisterForm;