export function Capitalize(text){
    let words = text.split(' ')
    const capitalizedWords = words.map( word => word.charAt(0).toUpperCase() + word.slice(1) )
    
    return capitalizedWords.join(' ');
}

export function PhoneNormalize(phone){
    let code = phone.slice(0, 4)
    let number = phone.slice(4)
    const result = code + '-' + number

    return result
}