const FormatTable = (text) => {
    // Adiciona espaço antes de cada letra maiúscula
    if (text) {
        text = text?.replace(/([A-Z])/g, ' $1');
        // Converte a primeira letra de cada palavra para maiúscula
        text = text?.replace(/^\w|\s\w/g, function(letra) {
            return letra.toUpperCase();
        });
    }
    return text;
}

export default FormatTable