const FormatURL = (pag) => {
  let pagAtt = pag?.normalize('NFD').replace(/\p{Mn}/gu, "")
  if(pagAtt?.indexOf(' ') >= 0){
    return pagAtt?.replace(/\s+/g, '-').toLowerCase()
  }else{
    return pagAtt?.toLowerCase()
  }
}

export default FormatURL