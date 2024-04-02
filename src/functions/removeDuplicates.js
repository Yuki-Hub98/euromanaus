const RemoveDuplicatesPost = (arrayGlobal, newItems) => {
  let newArray = newItems.filter(newItem => {
    return !arrayGlobal.some(existingItem => existingItem.codigo === newItem.codigo);
  });

  return newArray
}

const  isEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
      return false;
  }

  for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }

  return true;
}

const RemoveDuplicatesPut = (arrayGlobal, newItems) => {
  const newArray = newItems.filter(newItem => {
    return !arrayGlobal.some(existingItem => isEqual(existingItem, newItem));
  });

  return newArray
}

const RemoveDuplicatesItems = (array) => {
  const setItems = new Set();
  const newArray = array.filter((item) => {
    const duplicatedCor = setItems.has(item.cor);
    const duplicatedEspacificacao = setItems.has(item.especificacao);
    setItems.add(item.cor);
    setItems.add(item.especificacao);
    return !duplicatedCor || !duplicatedEspacificacao;
  });
  console.log("newArray: ", newArray)
  return newArray
}

export { RemoveDuplicatesPost, RemoveDuplicatesPut, RemoveDuplicatesItems }