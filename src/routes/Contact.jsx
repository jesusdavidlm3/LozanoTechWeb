import instagramLogo from '../img/icons/instagram.png'
import whatsappLogo from '../img/icons/whatsapp.png'
import emailLogo from '../img/icons/email.png'
import phoneLogo from '../img/icons/phone.png'

const Contact = () => {
    return(
        <div className="Contact">
            <h1>Contactanos!</h1>
            <div className="listContainer">
                <a href="https://wa.me/qr/X3Z6NWXVII44D1" target='_blank'><img src={whatsappLogo}/>Whatsapp</a>
                <a href="https://www.instagram.com/lozanotech/" target='_blank'><img src={instagramLogo}/>Instagram</a>
                <a href="mailto:lozanotech2020@gmail.com" target='_blank'><img src={emailLogo}/>Email</a>
                <a href="tel:+584127859759" target='_blank'><img src={phoneLogo}/>Telefono</a>
            </div>
        </div>
    )
}

export default Contact;