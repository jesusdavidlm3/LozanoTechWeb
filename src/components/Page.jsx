const Page = ({display}) => {
    return(
        <div className="Page">

            { display=='start' && 
                <p>estas en la pagina de inicio</p>
            }

            { display=='reg' && 
                <p>estas en la pagina de registro</p>
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