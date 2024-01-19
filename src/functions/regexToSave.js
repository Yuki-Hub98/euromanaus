const RegexToSave = (param) => {

    let string = ''
    string = param.toUpperCase()
    for (let i = 0; i < string.length; i++) {
        if (param[0] === " ") {
            return string = ''
        }else if(param[i] === "  "){
            return string = ''
        }
    }
    return string
}

export default RegexToSave