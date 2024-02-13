import s1 from '/src/img/services/s1.jpg'
import s2 from '/src/img/services/s2.jpg'
import s3 from '/src/img/services/s3.jpg'
import s4 from '/src/img/services/s4.jpg'
import s5 from '/src/img/services/s5.jpg'
import s6 from '/src/img/services/s6.jpg'
import s7 from '/src/img/services/s7.jpg'
import s8 from '/src/img/services/s8.png'
import s9 from '/src/img/services/s9.jpg'
import s10 from '/src/img/services/s10.avif'
import s11 from '/src/img/services/s11.avif'

export const Services = () => {
    return(
        <div className="services">
            <h1>Contamos con una amplia variedad de servicios</h1>
            <p>Para cualquier problema que usted pueda presentar podemos
                ofrecerle una solucion.
            </p>

            <div className="servicesContainer">
                <div className="individualService">
                    <img src={s1}/>
                    <p>Paginas web</p>
                </div>

                <div className="individualService">
                    <img src={s2}/>
                    <p>Redes WiFi</p>
                </div>

                <div className="individualService">
                    <img src={s3}/>
                    <p>Soporte remoto</p>
                </div>

                <div className="individualService">
                    <img src={s4}/>
                    <p>Limpieza antivirus</p>
                </div>

                <div className="individualService">
                    <img src={s5}/>
                    <p>Software apple</p>
                </div>

                <div className="individualService">
                    <img src={s6}/>
                    <p>Reparacion de USBs</p>
                </div>

                <div className="individualService">
                    <img src={s7}/>
                    <p>Programas</p>
                </div>

                <div className="individualService">
                    <img src={s8}/>
                    <p>Optimizacion</p>
                </div>

                <div className="individualService">
                    <img src={s9}/>
                    <p>Manteniminto</p>
                </div>

                <div className="individualService">
                    <img src={s10}/>
                    <p>Actualizaciones</p>
                </div>

                <div className="individualService">
                    <img src={s11}/>
                    <p>Software</p>
                </div>
            </div>
        </div>
    )
}