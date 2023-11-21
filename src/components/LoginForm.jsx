import { Button } from "./Button/Button";
import { TextField } from "./TextField/TextField";

const LoginForm = () => {
    return(
        <>
            <form className="Form">
                <h1>Iniciar sesion</h1>
                <TextField label='Identificacion' type="number"></TextField>
                <TextField type="password" label='Contraseña'></TextField>

                <Button type="submit" variant='allow' label='iniciar Sesion'></Button>
            </form>
        </>
    )
}

export default LoginForm;