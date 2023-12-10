import './ButtonStyle.scss'

export const Button = ({label, variant, onClick, className}) => {
    return(
        <button className={`${variant} ${className}`} onClick={onClick}>{label}</button>
    )
}