import LoginForm from './LoginForm'
import { CheckPage } from './CheckPage'
import { StartPage } from './StartPage'
import { Services } from './Services'
import { Comments } from './Comments'
import { AboutUs } from './AboutUs'

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