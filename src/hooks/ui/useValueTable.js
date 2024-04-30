import { useState } from "react"


const useValueTable = (severAllGet = null) => {
  const [valueTable, setValueTable] = useState();

  const [clear, setClear] = useState(false)

  const getValueTable = (valueTable) => {
    if (severAllGet?.length > 0) {
      const edit = severAllGet.map(item => item?.codigo === valueTable?.codigo ? item : null).filter(item => item !== null)
      setValueTable(edit[0])
    }else{
      setValueTable(valueTable)
    }
  }

  const clearValue = (value) => {
    setClear(value)
    setValueTable(null)
  }

  return {valueTable, getValueTable, clearValue, clear}
}



export default useValueTable