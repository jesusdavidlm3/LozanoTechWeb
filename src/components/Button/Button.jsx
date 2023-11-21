import './ButtonStyle.scss'

export const Button = ({label, variant}) => {
    return(
        <button className={variant}>{label}</button>
    )
}