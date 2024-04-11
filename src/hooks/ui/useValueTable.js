import { useState } from "react"


const useValueTable = (severAllGet = null) => {
  const [valueTable, setValueTable] = useState();

  const getValueTable = (valueTable, focus) => {
    if (severAllGet?.length > 0) {
      const edit = severAllGet.map(item => item.codigo === valueTable.codigo ? item : null).filter(item => item !== null)
      setValueTable(edit[0])
    }else{
      setValueTable(valueTable)
    }
  }

  return {valueTable, getValueTable}
}



export default useValueTable