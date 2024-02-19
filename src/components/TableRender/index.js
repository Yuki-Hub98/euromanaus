"use client"
import Table from "../Table";

const TableRender = (props) => {
		const {ValueTable, data} = props

		const TableAssert = (data, tableValue, style) => {
				return(
						<>
						{data?.length !=0 ? 
								<Table data={data} vTable={tableValue} style={style} />
						: 
								<div className="flex h-96 justify-center items-center">
										<h1 className="text-[#2c2c2b] font-bold"> Objeto sem Cadastro </h1>
								</div>
						}
						</>
				)
		}

		const TableTemp = (option, data) => {

				switch (option) {
						case "departamento":
								return(
										<>
										{TableAssert(data, ValueTable, "w-1/3")}
										</>
								)
						case "linha":
								return(
										<>
										{TableAssert(data, ValueTable, "w-1/3")}
										</>
								)
						case "familia":
								return(
										<>
										{TableAssert(data, ValueTable, "w-1/3")}
										</>
								)
						case "grupo":
								return(
										<>
										{TableAssert(data, ValueTable, "w-1/3")}
										</>
								)
						case "cor":
								return(
										<>
										{TableAssert(data, ValueTable, "w-1/3")}
										</>
								)
						case "especificacao":
								return(
										<>
										{TableAssert(data, ValueTable, "w-1/3")}
										</>
								)
						case "cep":
								return(
										<>
										{TableAssert(data, ValueTable, "table-auto whitespace-nowrap")}
										</>
								)
						case "fornecedor":
								return(
										<>
										{TableAssert(data, ValueTable, "table-auto whitespace-nowrap")}
										</>
								)
								default:
										break;
				}
		}
		return(
				<> 
				<div className='w-full top-0 overflow-auto h-full bg-[#EDEDED]'>
						{TableTemp(props?.name, data)}
				</div>
				</>
		)
}


export default TableRender