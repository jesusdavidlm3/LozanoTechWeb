import './TextFieldStyle.scss'

export const TextField = ({label, type, id, readOnly, value, required}) => {

    return(
        <input 
            value={value}
            readOnly={readOnly}
            className="txtfld1" 
            id={id}
            placeholder={label}
            type={type}
        ></input>
    )
}