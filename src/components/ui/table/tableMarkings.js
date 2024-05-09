"use client"
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
const TableMarkings = (props) => {
  const {data, getValueTable, option, clearItem, clear, clearValue} = props
  const [focusedRow, setFocusedRow] = useState(null);
  const [markedCellValue, setMarkedCellValue] = useState();

  const handleKeyDown = (event) => {
		if (event.key === 'ArrowUp') {
    setFocusedRow((prevRow) => (prevRow !== null ? Math.max(prevRow - 1, 0) : 0));
      } else if (event.key === 'ArrowDown') {
    setFocusedRow((prevRow) =>
    prevRow !== null ? Math.min(prevRow + 1, props?.data.length - 1) : 0
      );
    }
  }

  const updateMarkedRowValues = (rowIndex) => {
		setMarkedCellValue(props?.data[rowIndex]);
	};

  const handleCellClick = (rowIndex) => {
		// Manter a célula marcada após o clique
		setFocusedRow(rowIndex);
    setMarkedCellValue(props?.data[rowIndex]);
  }

  useEffect(() => {
    if (markedCellValue) {
      getValueTable(markedCellValue)
    }
	},[markedCellValue])

  useEffect(() => {
    if(clear){
      setMarkedCellValue(null)
      setFocusedRow(null)
      clearValue(false)
    }

  },[clear])

  useEffect(() => {
    if (focusedRow !== null) {
			updateMarkedRowValues(focusedRow);
		}
		window.addEventListener('keydown', handleKeyDown);
		return () => {
		window.removeEventListener('keydown', handleKeyDown);
		};
	},[focusedRow]);

  const render = (value) => {
    switch (value) {
      case "mark":
      return(
        <>
        <tbody>
          {data?.map((item, index) => (
          <tr key={index}
          tabIndex={0}
          onFocus={() => { item.etapaDeProducao ?
          setFocusedRow(index) : null}}
          className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'} ${focusedRow === index && item.hasOwnProperty('etapaDeProducao') ? 'bg-[#edca62b4]' : 'bg-[#2c2c2b]'}`} >
            <td
              className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'} ${focusedRow === index && item.hasOwnProperty('etapaDeProducao') ? 'bg-[#edca62b4]' : 'bg-[#2c2c2b]'}`} >
              {item.codigo}
            </td>
            <td  
              className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'} ${focusedRow === index && item.hasOwnProperty('etapaDeProducao') ? 'bg-[#edca62b4]' : 'bg-[#2c2c2b]'}`} >
              {item.tipo}
            </td>
            {item.etapaDeProducao ? 
              <td  onClick={() => handleCellClick(index)} 
                className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white cursor-pointer' : 'bg-[#F7F7F7]'} ${focusedRow === index && item.hasOwnProperty('etapaDeProducao') ? 'bg-[#edca62b4]' : 'bg-[#2c2c2b]'}`} >
                {item.etapaDeProducao}
              </td>
            :
              <td 
                className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white cursor-pointer' : 'bg-[#F7F7F7]'} ${focusedRow === index && item.hasOwnProperty('etapaDeProducao') ? 'bg-[#edca62b4]' : 'bg-[#2c2c2b]'}`} >
                {item.grupoRecurso || item.descricaoItem}
              </td>
            }
            <td 
              className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'} ${focusedRow === index && item.hasOwnProperty('etapaDeProducao') ? 'bg-[#edca62b4]' : 'bg-[#2c2c2b]'}`} >
              {item.quantidade}
            </td>
            <td 
              className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'} ${focusedRow === index && item.hasOwnProperty('etapaDeProducao') ? 'bg-[#edca62b4]' : 'bg-[#2c2c2b]'}`} >
              {item.valorTotalUnitario || item.valorItem}
            </td>
            <td
              className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'} ${focusedRow === index && item.hasOwnProperty('etapaDeProducao') ? 'bg-[#edca62b4]' : 'bg-[#2c2c2b]'}`} >
              {item.valorTotalRecurso || item.valorTotalItem}
            </td>
            <td onClick={()=> clearItem(item)} className={`${item.hasOwnProperty('etapaDeProducao') ? 'border outline-none border-[#d9d9d9] text-[#2c2c2b] bg-[#F7F7F7] cursor-pointer hover:text-danger-500'  : 'bg-[#D4D4D8] border-0'}`}>
              {item.etapaDeProducao ? <MdDeleteOutline/>  : ''}
            </td>
          </tr>))}
        </tbody>
        </>
        )
      case "register":
      return(
        <>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}
            className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >
              <td
                className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >
                {item.codigo}
              </td>
              <td 
                className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >
                {item.tipo}
              </td>
              <td
                className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >
                {item.etapaDeProducao || item.grupoRecurso || item.descricaoItem}
              </td>
              <td
                className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >
                {item.quantidade}
              </td>
              <td
                className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >
                {item.valorTotalUnitario || item.valorItem}
              </td>
              <td
                className={`border outline-none text-tiny border-[#d9d9d9] cursor-pointer text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >
                {item.valorTotalRecurso || item.valorTotalItem}
              </td>
              <td onClick={()=> clearItem(item)} className={`${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#D4D4D8] border-0' : 'border outline-none border-[#d9d9d9] text-[#2c2c2b] bg-[#F7F7F7] cursor-pointer hover:text-danger-500'}`}>
                {item.etapaDeProducao ? '' : <MdDeleteOutline/>}
              </td>
            </tr>
          ))}
        </tbody>
        </>
      )
    
      default:
        break;
    }
  }

  return (
    <table className={`w-full table-auto whitespace-nowrap overflow-x-auto`}>
      <thead>
        <tr>
          <th className="p-2 bg-[#CFCFCF] text-tiny border outline-none sticky top-0 text-[#2c2c2b]">Código</th>
          <th className="p-2 bg-[#CFCFCF] text-tiny border outline-none sticky top-0 text-[#2c2c2b]">Tipo</th>
          <th className="p-2 bg-[#CFCFCF] text-tiny border outline-none sticky top-0 text-[#2c2c2b]">Descricao </th>
          <th className="p-2 bg-[#CFCFCF] text-tiny border outline-none sticky top-0 text-[#2c2c2b]">Quantidade</th>
          <th className="p-2 bg-[#CFCFCF] text-tiny border outline-none sticky top-0 text-[#2c2c2b]">Valor Unitário</th>
          <th className="p-2 bg-[#CFCFCF] text-tiny border outline-none sticky top-0 text-[#2c2c2b]">Valor Total</th>
        </tr>
      </thead>
      {render(option)}
    </table>
    );
  };

export default TableMarkings