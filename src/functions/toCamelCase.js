const ToCamelCase = (str) => {
  let replacedStr = str.replace(/[ãáàâ]/gi, 'a')
                      .replace(/[õóòô]/gi, 'o')
                      .replace(/[éèê]/gi, 'e')
                      .replace(/[íìî]/gi, 'i')
                      .replace(/[úùû]/gi, 'u')
                      .replace(/[ç]/gi, 'c');
  let cleanedStr = replacedStr.replace(/[^\w\s]/g, '');
  let camelCase = cleanedStr.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  }).replace(/\s+/g, '');
  
  return camelCase.charAt(0).toLowerCase() + camelCase.slice(1);
}

export default ToCamelCase

