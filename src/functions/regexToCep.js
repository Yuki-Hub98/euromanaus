const RegexCep = (str) =>  {
    let string = ''
    string = str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
    return string
}

export default RegexCep