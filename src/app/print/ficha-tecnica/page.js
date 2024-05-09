"use client"
import { useSearchParams } from "next/navigation"
import React , { useState, useEffect, useRef } from "react"
import { ReactToPrint }  from "react-to-print"
import { SlPrinter } from 'react-icons/sl';
import FormatValuePrint from "@/functions/formatValue";

const FichaTecnica = React.forwardRef((props, ref) => {
		const { data, sumarry } = props;
    return (
      <div ref={ref} className="flex flex-col gap-1 h-screen w-screen p-2.5">
				<div className="h-20 border-1 border-gray-900">
					<div className="p-2 items-center">
						<h1 className="font-bold" >Euromanaus</h1>
						<h1 className="font-bold">Ficha Técnica: {sumarry.fichaTecnica}</h1>
					</div>
				</div>
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
					<tbody>
					{data.etapas.map((item, index) => (
						<tr key={index}
							className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white border-[#2c2c2b] col-span-full' : 'bg-[#F7F7F7]'}`} >
							{item.etapaDeProducao ? 							
								<td
									className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white border-[#2c2c2b] col-span-full' : 'bg-[#F7F7F7]'}`} >
									{item.etapaDeProducao}
								</td> 
							: 
								<td
									className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white border-[#2c2c2b] col-span-full' : 'bg-[#F7F7F7]'}`} >
									{item.codigo}
								</td>
							}
							
							<td 
								className={`border outline-none text-tiny border-[#d9d9d9]  text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white border-[#2c2c2b] col-span-full' : 'bg-[#F7F7F7]'}`} >
								{item.tipo}
							</td>
							<td
								className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white border-[#2c2c2b] col-span-full' : 'bg-[#F7F7F7]'}`} >
								{ item.grupoRecurso || item.descricaoItem }
							</td>
							<td
								className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white border-[#2c2c2b] col-span-full' : 'bg-[#F7F7F7]'}`} >
								{item.quantidade}
							</td>
							<td
								className={`border outline-none text-tiny border-[#d9d9d9] text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white border-[#2c2c2b] col-span-full' : 'bg-[#F7F7F7]'}`} >
								{FormatValuePrint(item.valorTotalUnitario) || FormatValuePrint(item.valorItem)}
							</td>
							<td
								className={`border outline-none text-tiny border-[#d9d9d9] cursor-pointer  ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white border-[#2c2c2b] col-span-full' : 'bg-[#F7F7F7]'}`} >
								{FormatValuePrint(item.valorTotalRecurso) || FormatValuePrint(item.valorTotalItem)}
							</td>
						</tr>
					))}
					</tbody>
				</table>
				<div className="h-20 border-1 border-gray-900">
					<div className="p-2 items-center">
						<h1 className="font-bold" >Tempo estimado em horas: {(sumarry.tempoEstimadoEmMinutos/60).toFixed(2)}</h1>
						<h1 className="font-bold" >Valor Total dos items: {FormatValuePrint(sumarry.valorTotalItens)} </h1>
						<h1 className="font-bold" >Valor Total dos recursos: {FormatValuePrint(sumarry.valorTotalRecursos)} </h1>
					</div>
				</div>
      </div>

			
    )
  });

const FichaTecnicaPrint = () => {

	const searchParams = useSearchParams()
	const data = JSON.parse(searchParams.get("data"))
	const [dataRender, setDataRender] = useState({etapas:[]})
	const [sumarry, setSumarry] = useState ({
		codigo: 0,
		fichaTecnica: "",
		tempoEstimadoEmMinutos:0,
		valorTotalItens:0,
		valorTotalRecursos:0
	})
	const formatDataRender = (data) => {
		setSumarry(prev => ({
			...prev,
			["codigo"]: data.codigo,
			["fichaTecnica"]: data.fichaTecnica,
			["tempoEstimadoEmMinutos"]: data.tempoEstimadoEmMinutos,
			["valorTotalItens"]: data.valorTotalItens ,
			["valorTotalRecursos"]:data.valorTotalRecursos
		}))
    const newArraysRender = data.etapas.map((array) => {
      let newArray = array.etapaDeProducaoRecursos.concat(array.etapaDeProducaoItems)
      newArray.unshift({codigo:array.codigo, etapaDeProducao: array.etapaDeProducao})
      return newArray
    })
    setDataRender(prev => ({
      ...prev,
      ["etapas"]: newArraysRender.reduce((acc, curr) => acc.concat(curr), [])
    }))
		
  }

	useEffect(() => {
		if (data) {
			formatDataRender(data)
		}
	}, [searchParams])

	const componenteRef = useRef();

  return (
    <div className="flex flex-col justify-center">
			<div className="flex justify-center mb-2">
				<ReactToPrint
					trigger={() => <div onClick={() => handlePrint} className="h-6 w-20 border border-background-page text-background-page items-center justify-center text-tiny rounded flex flex-row gap-2 cursor-pointer hover:text-[#edca62] hover:border-[#edca62]"> Imprimir <SlPrinter /></div>}
					content={() => componenteRef.current}
				/>
			
			</div>
			<FichaTecnica ref={componenteRef} data={dataRender} sumarry={sumarry} />
    </div>
  );

}

export default FichaTecnicaPrint