"use client"
import Table from "."

const TableRender = (props) => {
		const {ValueTable, 
			data, 
			style,  
			type, 
			buttons, 
			editButton, 
			deleteButto, 
			nameRequest
		} = props


		const TableAssert = (data, tableValue, style, buttons, editButton, deleteButto, nameRequest) => {
				return(
						<>
						{data?.length !=0 ? 
							<Table data={data} vTable={tableValue} style={style} edit={editButton} 
							del={deleteButto} buttons={buttons} nameRequest={nameRequest}/>
						: 
							<div className="flex h-96 justify-center items-center">
								<h1 className="text-[#2c2c2b] font-bold"> Objeto sem Cadastro </h1>
							</div>
						}
						</>
				)
		}

		return(
				<> 
				<div className='w-full top-0 overflow-auto h-full bg-[#EDEDED]'>
					{TableAssert(data, ValueTable, style, buttons, editButton, deleteButto, nameRequest)}
				</div>
				</>
		)
}


export default TableRender