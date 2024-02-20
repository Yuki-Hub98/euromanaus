const FormatFone = (numero) => {
  // Remover qualquer caractere que não seja dígito
  numero = numero.replace(/\D/g, '');

  // Aplicar a formatação de acordo com o padrão desejado
  return numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

export default FormatFone