import './TextFieldStyle.scss'

export const TextField = ({label, type, id, readOnly, value, pattern, title}) => {

    return(
        <input 
            value={value}
            readOnly={readOnly}
            className="txtfld1" 
            id={id}
            placeholder={label}
            type={type}
            pattern={pattern}
            title={title}
        ></input>
    )
}