import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { CheckPage } from './CheckPage'

const Page = ({display}) => {
    return(
        <div className="Page">

            { display=='start' && 
                <p>estas en la pagina de inicio</p>
            }

            { display=='reg' && 
                <RegisterForm/>
            }

            { display=='log' && 
                <LoginForm/>
            }

            { display=='check' && 
                <CheckPage/>
            }
        </div>
    )
}

export default Page