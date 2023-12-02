export const StartPage = () => {
    return(
        <div className="startPage">
            <img className="welcomeLogo" src="../src/img/LozanoTechIsotipoBlue.png"/>
            <h1>Hola!</h1>
            <p>
                Somos un proyecto pequeño dedicado a llevar a cabo reparaciones
                accesibles y de calidad en equipos de escritorio y laptops para
                hogares, pequeñas empresas y estudiantes.
            </p>

            <div className="StartInfoContainer">
                <img className="roundImage" src="./src/img/ref1.png"/>
                <div className="left">
                    <h1>Tu tiempo vale oro</h1>
                    <p>
                        Nos enfocamos en ofrecerte toda la calidad de nuestro servicio
                        siempre en tiempo record ya que sabemos que necesitas tu equipo
                        para continuar con tu trabajo o simplemente quieres disfrutar
                        de el y estamos concientes de ello.
                    </p>
                </div>
            </div>

            <div className="StartInfoContainer">
                <div className="right">
                    <h1>Todo a medida</h1>
                    <p>
                        Somos especialistas en realizar mejoras y ensamblajes
                        de acuerdo a tus necesidades para que no gastes de mas
                        ni obtengas un bajo rendimiento.
                    </p>
                </div>
                <img src="./src/img/ref2.png"/>
            </div>

            <div className="StartInfoContainer">
                <img className="roundImage" src="./src/img/ref3.jpg"/>
                <div className="left">
                    <h1>Mas que solo reparaciones</h1>
                    <p>
                        Contamos con muchos mas servicios que solo reparaciones o
                        mantenimiento preventivo, tenemos una amplia variedad de
                        servicios. Para conocer mas presiona <span>aqui</span>
                    </p>
                </div>
            </div>
        </div>
    )
}