export const StartPage = () => {
    return(
        <div className="startPage">
            <img className="welcomeLogo" src="../src/img/LozanoTechIsotipoBlue.png"/>
            <h1>Hola!</h1>
            <p>
                Somos una organizacion pequeña dedicada a llevar a cabo reparaciones
                accesibles y de calidad en equipos de escritorio y laptops para
                hogares, pequeñas empresas y estudiantes.
            </p>

            <div className="infoContainer1">
                <img src="./src/img/ref1.png"/>
                <div>
                    <h1>Tu tiempo vale oro</h1>
                    <p>Nos enfocamos en ofrecerte toda la calidad de nuestro servicio
                        siempre en tiempo record ya que sabemos que necesitas tu equipo
                        para continuar con tu trabajo o simplemente quieres disfrutar
                        de el y estamos concientes de ello.
                    </p>
                </div>
            </div>
        </div>
    )
}