"use client"
import { useEffect, useState } from "react";
import { RemoveDuplicatesCodigo } from "@/functions/removeDuplicates";
import { MdDeleteOutline } from "react-icons/md";

const TableSelect = (props) => {
  const {data, getValueTable, option, clearItem, clear, clearValue} = props
  const [focusedRow, setFocusedRow] = useState(null);
  const [markedCellValue, setMarkedCellValue] = useState({administracaoDePreco:[]});
  const [valuesTables, setValuesTables] = useState({administracaoDePreco:[]})
  const [dataTable, setDataTable] = useState();
  const [margem, setMargem] = useState({})
  const [preco, setPreco] = useState({})

  const removeItem = (item) => {
    const newValues = [...dataTable]
    let values = newValues.filter(value => value.codigo !== item.codigo)
    setDataTable(values)
  }

  
  const handleValue = (event, index) => {
    const { value, name } = event.target;
    if (name === "margemProposta") {
      setMargem({ ...margem, [index]: value });
    }else if (name === "precoProposto") {
      setPreco({...preco, [index]: value})
    }
  }

  const defValues = (data) => {
    const newAdministracao = {...valuesTables}
    if (data.length) {
      data.forEach(element => {
        newAdministracao.administracaoDePreco.push(element)
      });
      setValuesTables(prev => ({
        ...prev,
        ["administracaoDePreco"]: RemoveDuplicatesCodigo(newAdministracao.administracaoDePreco)
      }))
    }else{
      newAdministracao.administracaoDePreco.push(data)
      setValuesTables(prev => ({
        ...prev,
        ["administracaoDePreco"]: RemoveDuplicatesCodigo(newAdministracao.administracaoDePreco)
      }))
    } 
  }

  const calcPrecoPropostoMargemProposta = (press) => {
    const {key, target} = press
    let newDataTable = [...dataTable] 

    if (key === "Enter" && target.name === "precoProposto") {
      const newValues = markedCellValue.administracaoDePreco.map(value => {
        value.margemProposta = (((parseFloat(target.value) - value.valorCusto)/parseFloat(target.value)) * 100).toFixed(0)
        value.precoProposto = parseFloat(target.value)
        return value 
      })
      
      newValues.forEach(value => {
        return newDataTable.map(valueTable => {
          if (valueTable.codigo === value.codigo) {
            valueTable.margemProposta = parseFloat(value.margemProposta)
            valueTable.precoProposto = value.precoProposto
            return valueTable
          }
        })
      }) 

      setMarkedCellValue(prev => ({
        ...prev,
        ["administracaoDePreco"]: []
      }))

      setMargem({})
      setPreco({})

      setDataTable(newDataTable)
    }else if (key === "Enter" && target.name === "margemProposta") {
      const newValues = markedCellValue.administracaoDePreco.map(value => {
        if (value.valorCusto === 0) {
          alert("Não possivel fazer essa operação sem o Valor Custo")
          return;
        }
        value.precoProposto = (value.valorCusto/((100-parseFloat(target.value))/100)).toFixed(2)
        value.margemProposta = parseFloat(target.value)
        return value 
      })
      if (newValues[0] !== undefined) {
        newValues.forEach(value => {
          return newDataTable.map(valueTable => {
            if (valueTable.codigo === value?.codigo) {
              valueTable.precoProposto = parseFloat(value.precoProposto)
              valueTable.margemProposta = value.margemProposta
              return valueTable
            }
          })
        }) 
        setMarkedCellValue(prev => ({
          ...prev,
          ["administracaoDePreco"]: []
        }))
  
        setMargem({})
        setPreco({})
  
        setDataTable(newDataTable)
      }
    }

  }

  const selectValues = (value, eve) => {
    const { checked } = eve.target
    if (checked) {
      const newAdministracao = {...markedCellValue}
      if (value.length) {
        value.forEach(element => {
          newAdministracao.administracaoDePreco.push(element)
        });
        setMarkedCellValue(prev => ({
          ...prev,
          ["administracaoDePreco"]: RemoveDuplicatesCodigo(newAdministracao.administracaoDePreco)
        }))
        defValues(markedCellValue.administracaoDePreco)
      }else{
        newAdministracao.administracaoDePreco.push(value)
        setMarkedCellValue(prev => ({
          ...prev,
          ["administracaoDePreco"]: RemoveDuplicatesCodigo(newAdministracao.administracaoDePreco)
        }))
        defValues(markedCellValue.administracaoDePreco)
      } 
    }
    
  }

  useEffect(() => {
    if (valuesTables) {
      getValueTable(valuesTables.administracaoDePreco)
    }
  },[valuesTables])

  useEffect(() => {
    if(clear){
      setMarkedCellValue(null)
      setFocusedRow(null)
      clearValue(false)
    }

  },[clear])

  useEffect(() => {
    if (data) {
			setDataTable(data)
		}
	},[data]);

  
  const typeTable = (value) => {
    switch (value) {
      case "render":
        return(
          <>
          <tbody>
            {dataTable?.map((item, index) => (
            <tr key={index}
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b]  ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
              <td className=" items-center justify-center">
                <input type="checkbox" className="mr-2 accent-[#edca62b4] cursor-pointer" onChange={(e) =>  selectValues(item, e)} name="select"/>
              </td>
              <td
                className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                {item.codigo}
              </td>
              <td
                className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                {item.descricaoItem}
              </td>
              <td 
                className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                {item.precoAtual}
              </td>
              <td 
                className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                {item.valorCusto}
              </td>
              <td
                className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                {item.margemAtual}
              </td>
              <td
                className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                {item.margemProposta}
              </td>
              <td
                className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                {item.precoProposto}
              </td>
            </tr>))}
          </tbody>
          </>
        )
    case "setter":
      return(
        <>
        <tbody>
          {dataTable?.map((item, index) => (
          <tr key={index}
            className={`border outline-none border-[#d9d9d9] text-[#2c2c2b]  ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
            <td className=" items-center justify-center">
              <input type="checkbox" className="mr-2 accent-[#edca62b4] cursor-pointer" onChange={(e) => selectValues(item, e)} name="select"/>
            </td>
            <td
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
              {item.codigo}
            </td>
            <td
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
              {item.descricaoItem}
            </td>
            <td 
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
              {item.precoAtual}
            </td>
            <td 
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
              {item.valorCusto}
            </td>
            <td
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
              {item.margemAtual}
            </td>
            <td
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
              <input className="bg-[#EDEDED]" onKeyUp={calcPrecoPropostoMargemProposta} value={margem[index] || ''}
                placeholder={`${item?.margemProposta}`} name="margemProposta" onChange={(e) => handleValue(e, index)} />
            </td>
            <td
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
              <input className="bg-[#EDEDED]" onKeyUp={calcPrecoPropostoMargemProposta} value={preco[index] || ''} 
              placeholder={`${item?.precoProposto}`} name="precoProposto" onChange={(e) => handleValue(e, index)} />
            </td>
            <td
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                
            </td>
            <td
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny ${focusedRow === index ?'bg-[#edca62b4]' : 'border-[#d9d9d9]'}`} >
                
            </td>
            <td 
              onClick={() => removeItem(item)}
              className={`border outline-none border-[#d9d9d9] text-[#2c2c2b] text-tiny cursor-pointer hover:text-red-400`} >
                <MdDeleteOutline size={16}/>
            </td>
          </tr>))}
        </tbody>
        </>
      )
      default:
        break;
    }
  }

  return (

    <div className='w-full top-0 overflow-auto h-full bg-[#EDEDED]'>
      <table className={`w-full table-auto whitespace-nowrap overflow-x-auto`}>
        <thead>
          <tr>
            <th><input type="checkbox" className="mr-2 accent-[#edca62b4] cursor-pointer" onChange={(e) =>  selectValues(data, e)} name="select"/></th>
            <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Código</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Descricao </th>
            <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Preço Atual</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Valor Custo</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Margem Atual</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Margem Proposta</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Preço Proposto</th>
            {option === "setter" ?
              <>
                <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Margem Programada</th>
                <th className="p-2 bg-[#CFCFCF] border outline-none text-tiny sticky top-0 text-[#2c2c2b]">Preço Programado</th>
              </> 
              :
              null
            }
          </tr>
        </thead>
        {typeTable(option)}
      </table>
    </div>
    );
  };

export default TableSelect