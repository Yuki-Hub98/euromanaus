const FormatValuePrint = (value) => {
  let newValue = value?.toString();
  return newValue?.replace(/\./g, ",")
}

export default FormatValuePrint