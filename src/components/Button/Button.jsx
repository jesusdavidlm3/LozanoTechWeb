import './ButtonStyle.scss'

export const Button = ({label, variant, onClick}) => {
    return(
        <button className={variant} onClick={onClick}>{label}</button>
    )
}