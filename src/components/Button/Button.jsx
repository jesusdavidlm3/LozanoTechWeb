import './ButtonStyle.scss'

export const Button = ({label, variant, onClick, className, type}) => {
    return(
        <button
        className={`${variant} ${className}`}
        onClick={onClick}
        type={type}>{label}</button>
    )
}