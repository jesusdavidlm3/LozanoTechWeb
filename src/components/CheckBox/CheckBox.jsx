import './CheckBoxStyle.css'

export const CheckBox = ({ label }) => {
    return(
        <label className='chckbxctn'>
            <input
                className='checkBox'
                type="checkbox">    
            </input>
            {label}
        </label>
    )
}