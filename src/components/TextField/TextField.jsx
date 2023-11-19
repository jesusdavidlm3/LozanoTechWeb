import './TextFieldStyle.scss'

export const TextField = ({label, type}) => {
    return(
        <input className="txtfld1" placeholder={label} type={type}></input>
    )
}