import './TextFieldStyle.scss'

export const TextField = ({label, type, id}) => {
    return(
        <input className="txtfld1" id={id} placeholder={label} type={type}></input>
    )
}