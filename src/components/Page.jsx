import LoginForm from '../routes/LoginForm'
import { CheckPage } from '../routes/CheckPage'
import { StartPage } from './StartPage'
import { Services } from './Services'
import { Comments } from '../routes/Comments'
import { AboutUs } from '../routes/AboutUs'

const Page = ({display}) => {
    return(
        <div className="Page">
            { display=='start' && 
                <StartPage/>
            }

            { display=='log' && 
                <LoginForm/>
            }

            { display=='check' && 
                <CheckPage/>
            }

            { display=='services' && 
                <Services/>
            }

            { display=='comments' && 
                <Comments/>
            }

            { display=='aboutUs' && 
                <AboutUs/>
            }
        </div>
    )
}

export default Page