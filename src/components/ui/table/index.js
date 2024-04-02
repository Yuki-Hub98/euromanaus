"use client"
import { useState, useEffect } from "react";
import FormatTable from "@/functions/formatTable";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const Table = (props) => {
		const [focusedRow, setFocusedRow] = useState(null);
		const [focusedCol, setFocusedCol] = useState(null);
		const [markedCellValue, setMarkedCellValue] = useState();
		const {data, buttons, edit, vTable, nameRequest, del} = props
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
						vTable(markedCellValue)
				}
				Clear();
		},[markedCellValue])

		useEffect(() => {
				window.addEventListener('keydown', handleKeyDown);
				return () => {
				window.removeEventListener('keydown', handleKeyDown);
				};
		});

		return(
				<>
						<table className={`${props?.style} overflow-x-auto`}>
								<thead>
										<tr >
												{data ? 
												(Object.keys(data[0]).map((col, index) => (
														<th key={index} className='p-2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b] '>
																{FormatTable(col)}
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
										)))
										: null}
										{Object.entries(data[0]).length !== 0 && buttons ?
										<>
											<td onClick={() => {vTable(item), edit()}} className="flex flex-row cursor-pointer bg-[#EDEDED] items-center justify-center hover:text-[#edca62b4]">
												<MdOutlineEdit/>
											</td>
											<td onClick={() => {del(nameRequest, item)}}  className="flex flex-row cursor-pointer bg-[#EDEDED] items-center justify-center hover:text-red-400">
												<MdDeleteOutline/>
											</td> 
										</> 
										:
											null
										}
										</tr>
								))}
								</tbody>
						</table>
				</>
		)
}

export default Table