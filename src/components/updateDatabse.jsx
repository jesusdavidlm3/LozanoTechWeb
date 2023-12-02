import { TextField } from "./TextField/TextField";
import { Button } from "./Button/Button";

const updateDatabase = () => {
    return(
        <div className="Updatedatabase">
            <form>
                <TextField label='usuario' type='text'></TextField>
                <TextField label='contraseña' type='password'></TextField>
            </form>
        </div>
    )
}

export default updateDatabase;