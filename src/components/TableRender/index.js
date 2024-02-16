"use client"
import Table from "../Table";

const TableRender = (props) => {
    const {ValueTable, data} = props

    const TableTemp = (option, data) => {

        switch (option) {
            case "departamento":
                return(
                    <>
                    <Table vTable={ValueTable} style={"w-1/3"} data={data}/>
                    </>
                )
            case "linha":
                return(
                    <>
                    <Table vTable={ValueTable} style={"w-1/3"} data={data}/>
                    </>
                )
            case "familia":
                return(
                    <>
                    <Table vTable={ValueTable} style={"w-1/3"} data={data}/> 
                    </>
                )
            case "grupo":
                return(
                    <>
                    <Table vTable={ValueTable} style={"w-1/3"} data={data}/>
                    </>
                )
            case "cor":
                return(
                    <>
                    <Table vTable={ValueTable} style={"w-1/3"} data={data}/>
                    </>
                )
            case "especificacao":
                return(
                    <>
                    <Table vTable={ValueTable} style={"w-1/3"} data={data}/>
                    </>
                )
            case "cep":
                return(
                    <>
                    <Table vTable={ValueTable} style={"table-auto whitespace-nowrap"} data={data}/>
                    </>
                )
            case "fornecedor":
                return(
                    <>
                    <Table vTable={ValueTable} style={"table-auto whitespace-nowrap"} data={data}/>
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