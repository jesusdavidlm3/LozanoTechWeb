import { Button } from './Button/Button'
import { TextField } from './TextField/TextField';

const RegisterForm = () => {
    return(
        <>
            <form className='registerForm'>
                <TextField label='Nombre' type='text'></TextField>
                <TextField label='Correo electronico' type='email'></TextField>
                <TextField label='Telefono' type='Telefono'></TextField>
                <TextField label='Contraseña' type='password'></TextField>

                <Button className='submit' label='Registrarse'></Button>
            </form>
        </>
    )
}

export default RegisterForm;