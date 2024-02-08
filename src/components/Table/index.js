"use client"
import { useState, useEffect } from "react";

const Table = (props) => {
    const [focusedRow, setFocusedRow] = useState(null);
    const [focusedCol, setFocusedCol] = useState(null);
    const [markedCellValue, setMarkedCellValue] = useState();

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
        setFocusedRow((prevRow) => (prevRow !== null ? Math.max(prevRow - 1, 0) : 0));
        } else if (event.key === 'ArrowDown') {
        setFocusedRow((prevRow) =>
            prevRow !== null ? Math.min(prevRow + 1, props?.data.length - 1) : 0
        );
        } else if (event.key === 'ArrowLeft') {
        setFocusedCol((prevCol) => (prevCol !== null ? Math.max(prevCol - 1, 0) : 0));
        } else if (event.key === 'ArrowRight') {
        setFocusedCol((prevCol) =>
            prevCol !== null ? Math.min(prevCol + 1, Object.keys(props?.data[0]).length - 1) : 0
        );
        }
    };

    const Clear =() =>{
        setMarkedCellValue(null)
        return;
    }

    const updateMarkedRowValues = (rowIndex) => {
        setMarkedCellValue(props?.data[rowIndex]);
    };

    const handleCellClick = (rowIndex, colIndex) => {
            // Manter a célula marcada após o clique
            setFocusedRow(rowIndex);
            setFocusedCol(colIndex);

            // Marcar apenas os valores da linha
            setMarkedCellValue(props?.data[rowIndex]);
    };

    useEffect(() => {
            if (focusedRow !== null) {
            updateMarkedRowValues(focusedRow);
            }
    });

    useEffect(() => {
        if (markedCellValue) {
            props?.ValueTable(markedCellValue)
        }
        Clear();
    },[props, markedCellValue])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const TableTemp = (option, data) => {

        switch (option) {
            case "departamento":
                return(
                    <>
                        <table className="w-1/3 border overflow-x-auto">
                            <thead>
                                <tr >
                                    {data ? 
                                    (Object.keys(data[0]).map((col, index) => (
                                        <th key={index} className='p-2 w-1/2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b] '>
                                            {col}
                                        </th>
                                        ))) : null}
                                    
                                </tr>
                            </thead>
                            <tbody >
                                {data?.map((item, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        tabIndex={0}
                                        onFocus={() => {
                                            setFocusedRow(rowIndex);
                                            setFocusedCol(null);
                                        }}
                                        className={`border outline-none border-[#d9d9d9] ${focusedRow === rowIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                        >
                                        { item ? (Object.values(item).map((value, colIndex) => (
                                        <td
                                            onClick={() => handleCellClick(rowIndex, colIndex)}
                                            key={colIndex}
                                            className={`border outline-none cursor-pointer border-[#d9d9d9] ${ focusedRow === rowIndex && focusedCol === colIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                            >
                                            {value}
                                        </td>
                                        ))): null}
                                    </tr>
                                ))}
                            </tbody>
                        </table>                    
                    </>
                )
            case "linha":
                return(
                    <>
                        <table className="w-1/3 border overflow-x-auto">
                            <thead>
                                <tr >
                                    { data ? (Object.keys(data[0]).map((col, index) => (
                                    <th key={index} className='p-2 w-1/2 bg-[#CFCFCF] border sticky top-0 text-[#2c2c2b]'>
                                        {col}
                                    </th>
                                    ))) : null}
                                </tr>
                            </thead>
                            <tbody >
                                {data?.map((item, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        tabIndex={0}
                                        onFocus={() => {
                                            setFocusedRow(rowIndex);
                                            setFocusedCol(null);
                                        }}
                                        className={`h-3 w-1/2 border outline-none border-[#d9d9d9] ${focusedRow === rowIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                        >
                                        { item ? (Object.values(item).map((value, colIndex) => (
                                        <td
                                            onClick={() => handleCellClick(rowIndex, colIndex)}
                                            key={colIndex}
                                            className={`h-3 w-1/2 border outline-none cursor-pointer border-[#d9d9d9]  ${ focusedRow === rowIndex && focusedCol === colIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                            >
                                            {value}
                                        </td>
                                        ))): null}
                                    </tr>
                                ))}
                            </tbody>
                        </table>       
                    </>
                )

                case "familia":
                    return(
                        <>
                        <table className="w-1/3 border overflow-x-auto">
                            <thead>
                                <tr >
                                    { data ? (Object.keys(data[0]).map((col, index) => (
                                    <th key={index} className='p-2 w-1/2 bg-[#CFCFCF] border sticky top-0 text-[#2c2c2b] '>
                                        {col}
                                    </th>
                                    ))) : null}
                                </tr>
                            </thead>
                            <tbody >
                                {data?.map((item, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        tabIndex={0}
                                        onFocus={() => {
                                            setFocusedRow(rowIndex);
                                            setFocusedCol(null);
                                        }}
                                        className={`h-3 w-1/2 border outline-none border-[#d9d9d9]  ${focusedRow === rowIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                        >
                                        { item ? (Object.values(item).map((value, colIndex) => (
                                        <td
                                            onClick={() => handleCellClick(rowIndex, colIndex)}
                                            key={colIndex}
                                            className={`h-3 w-1/2 border outline-none cursor-pointer border-[#d9d9d9]  ${ focusedRow === rowIndex && focusedCol === colIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                            >
                                            {value}
                                        </td>
                                        ))): null}
                                    </tr>
                                ))}
                            </tbody>
                        </table>       
                        </>
                    )

                case "grupo":
                    return(
                        <>
                        <table className="w-1/3 border overflow-x-auto">
                            <thead>
                                <tr >
                                    { data ? (Object.keys(data[0]).map((col, index) => (
                                    <th key={index} className=' p-2 w-1/2 bg-[#CFCFCF] border sticky top-0 text-[#2c2c2b]'>
                                        {col}
                                    </th>
                                    ))) : null}
                                </tr>
                            </thead>
                            <tbody >
                                {data?.map((item, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        tabIndex={0}
                                        onFocus={() => {
                                            setFocusedRow(rowIndex);
                                            setFocusedCol(null);
                                        }}
                                        className={`h-3 w-1/2 border outline-none border-[#d9d9d9]  ${focusedRow === rowIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                        >
                                        { item ? (Object.values(item).map((value, colIndex) => (
                                        <td
                                            onClick={() => handleCellClick(rowIndex, colIndex)}
                                            key={colIndex}
                                            className={`h-3 w-1/2 border outline-none cursor-pointer border-[#d9d9d9]  ${ focusedRow === rowIndex && focusedCol === colIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                            >
                                            {value}
                                        </td>
                                        ))): null}
                                    </tr>
                                ))}
                            </tbody>
                        </table>       
                        </>
                    )
                case "cor":
                    return(
                        <>
                    <table className="w-1/3 border overflow-x-auto">
                            <thead>
                                <tr >
                                    { data ? (Object.keys(data[0]).map((col, index) => (
                                    <th key={index} className='p-2 w-1/2 bg-[#CFCFCF] border sticky top-0 text-[#2c2c2b] '>
                                        {col}
                                    </th>
                                    ))) : null}
                                </tr>
                            </thead>
                            <tbody >
                                {data?.map((item, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        tabIndex={0}
                                        onFocus={() => {
                                            setFocusedRow(rowIndex);
                                            setFocusedCol(null);
                                        }}
                                        className={`h-3 w-1/2 border outline-none border-[#d9d9d9]  ${focusedRow === rowIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                        >
                                        { item ? (Object.values(item).map((value, colIndex) => (
                                        <td
                                            onClick={() => handleCellClick(rowIndex, colIndex)}
                                            key={colIndex}
                                            className={` h-3 w-1/2  border outline-none cursor-pointer border-[#d9d9d9] ${ focusedRow === rowIndex && focusedCol === colIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                            >
                                            {value}
                                        </td>
                                        ))): null}
                                    </tr>
                                ))}
                            </tbody>
                        </table>       
                        
                        </>
                    )
                    case "especificacao":
                    return(
                        <>
                        <table className="w-1/3 border overflow-x-auto">
                            <thead>
                                <tr >
                                    { data ? (Object.keys(data[0]).map((col, index) => (
                                    <th key={index} className='w-1/2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b] p-2 '>
                                        {col}
                                    </th>
                                    ))) : null}
                                </tr>
                            </thead>
                            <tbody >
                                {data?.map((item, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        tabIndex={0}
                                        onFocus={() => {
                                            setFocusedRow(rowIndex);
                                            setFocusedCol(null);
                                        }}
                                        className={`w-1/2 h-3  border outline-none border-[#d9d9d9]  ${focusedRow === rowIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                        >
                                        { item ? (Object.values(item).map((value, colIndex) => (
                                        <td
                                            onClick={() => handleCellClick(rowIndex, colIndex)}
                                            key={colIndex}
                                            className={`h-3 w-1/2 border outline-none cursor-pointer border-[#d9d9d9]  ${ focusedRow === rowIndex && focusedCol === colIndex ? 'bg-[#edca62b4]' : 'bg-[#F7F7F7]'}  text-[#2c2c2b]`}
                                            >
                                            {value}
                                        </td>
                                        ))): null}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </>
                    )
            default:
                break;
        }
    }
    
    return(
        <> 
            {TableTemp(props?.name, props?.data)}
        </>
    )
}


export default Table