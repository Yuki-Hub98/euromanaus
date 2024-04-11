import { Cell, Column, Table2 } from "@blueprintjs/table";


const TableTeste = (props) => {
  const {data} = props

  const dollarCellRenderer = (rowIndex) => (
    <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
  );

  const value = () =>{
    return data.map((element) => element.codigo)
  }

  const euroCellRenderer = (rowIndex, columnIndex, data) =>{ 
    /*
    data.map((element => <Cell key={rowIndex}>{`${element}`}</Cell>)) */
  };
    

  const name = (element) => {
    element.map(name => name)
  }

  return(
    <>
      <Table2 numRows={data.length}>
        {data?.map((element) => <Column name={name(Object.keys(element))} cellRenderer={(rowIndex, columnIndex) => euroCellRenderer(rowIndex, columnIndex, data)}/>)}
      </Table2>
    </>
  )


}

export default TableTeste

