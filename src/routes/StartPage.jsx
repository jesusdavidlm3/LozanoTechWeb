import isoTipoBlue from '/src/img/LozanoTechIsotipoBlue.png'
import Footer from '../components/Footer'
import imgRef1 from '/src/img/ref1.png'
import imgRef2 from '/src/img/ref2.png'
import imgRef3 from '/src/img/ref3.jpg'
import imgRef4 from '/src/img/ref4.jpg'
import { Link } from 'react-router-dom'
import Atropos from 'atropos/react'

export const StartPage = () => {

    return(
        <div className="startPage">
            <Atropos shadow={false} duration={50}>
                <img className="welcomeLogo" src={isoTipoBlue}/>
            </Atropos>
            <h1>Hola!</h1>
            <p>
                Somos un proyecto pequeño dedicado a llevar a cabo reparaciones
                accesibles y de calidad en equipos de escritorio y laptops para
                hogares, pequeñas empresas y estudiantes ademas de desarrollar
                herramientas y paginas web adaptadas a tus necesidades.
            </p>

            <div className="StartInfoContainer reverse">
                <div className="right">
                    <h1>Herramientas de calidad</h1>
                    <p>
                        Porque un trabajo bien hecho se hace bien tanto por dentro como
                        por fuera. Nos enfocamos en que las herramientas y webs que
                        que desarrollamos cumplan con todas tus expectativas mientras
                        prestamos especial atencion en el apartado estetico.
                    </p>
                </div>
                <img className="roundImage" src={imgRef4}/>
            </div>

            <div className="StartInfoContainer">
                <img className="roundImage" src={imgRef1}/>
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

            <div className="StartInfoContainer reverse">
                <div className="right">
                    <h1>Todo a medida</h1>
                    <p>
                        Somos especialistas en realizar mejoras y ensamblajes
                        de acuerdo a tus necesidades para que no gastes de mas
                        ni obtengas un bajo rendimiento.
                    </p>
                </div>
                <img src={imgRef2}/>
            </div>
            

            <div className="StartInfoContainer">
                <img className="roundImage" src={imgRef3}/>
                <div className="left">
                    <h1>Mas que solo reparaciones</h1>
                    <p>
                        Contamos con muchos mas servicios que solo reparaciones o
                        mantenimiento preventivo, tenemos una amplia variedad de
                        servicios. Para conocer mas presiona <Link className='spanLink' to={'/services'}> aqui </Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}