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
import Atropos from 'atropos/react'
import Footer from '../components/Footer'

export const Services = () => {
    return(
        <div className="services">
            <h1>Contamos con una amplia variedad de servicios</h1>
            <p>Para cualquier problema que usted pueda presentar podemos
                ofrecerle una solucion.
            </p>
            
            <div className="servicesContainer">
                <Atropos  shadow={false} duration={50}>
                        <img src={s1}/>
                </Atropos>
                
                <Atropos shadow={false} duration={50}>
                        <img src={s2}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s3}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s4}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s5}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s6}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s7}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s8}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s9}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s10}/>
                </Atropos>

                <Atropos shadow={false} duration={50}>
                        <img src={s11}/>
                </Atropos>
            </div>
            <div className="servicesContainerPhone">
                <img src={s1}/>
                <img src={s2}/>
                <img src={s3}/>
                <img src={s4}/>
                <img src={s5}/>
                <img src={s6}/>
                <img src={s7}/>
                <img src={s8}/>
                <img src={s9}/>
                <img src={s10}/>
                <img src={s11}/>
            </div>
            <Footer/>
        </div>
    )
}