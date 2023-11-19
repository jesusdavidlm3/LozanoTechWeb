import RegisterForm from './RegisterForm'

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
                <p>estas en la pagina de inicio de sesion</p>
            }

            { display=='check' && 
                <p>estas en la pagina de consulta</p>
            }
        </div>
    )
}

export default Page