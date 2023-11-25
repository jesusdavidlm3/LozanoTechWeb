import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { CheckPage } from './CheckPage'
import { StartPage } from './StartPage'

const Page = ({display}) => {
    return(
        <div className="Page">

            { display=='start' && 
                <StartPage/>
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