const formatText = (text) => {
  // Substitui "-" por " " e capitaliza primeira letra de cada palavra
  return text.replace(/-/g, ' ').replace(/\b\w/g, function(char) {
      return char.toUpperCase();
  });
}

export default formatText