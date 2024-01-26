import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";

const Table = (props) => {

    const TableTemp = (option, data) => {
        switch (option) {
            case "departamento":
                return(
                    <>
                        <table className="w-1/3 border-collapse overflow-x-auto">
                            <thead>
                                <tr>
                                    <th className='sticky top-0'></th>
                                    <th className='sticky top-0'></th>
                                    <th className='bg-[#edca62b4] border sticky top-0 text-[#2c2c2b] p-2 w-full'>Descrição</th>
                                </tr>
                            </thead>
                            <tbody >
                                {data?.map((data) => (
                                    <tr key={data?.descricao}>
                                        <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                        <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                        <td className='border p-2 border-[#d9d9d9] text-[#2c2c2b]'>{data?.descricao}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>                    
                    </>
                )
            case "linha":
                return(
                    <>
                        <table className="w-2/4 border-collapse">
                            <thead>
                                <tr>
                                    <th className='sticky top-0'></th>
                                    <th className='sticky top-0'></th>
                                    <th className='bg-[#edca62b4] border sticky top-0 text-[#2c2c2b] p-2 w-1/2'>Departamento</th>
                                    <th className='bg-[#edca62b4] border sticky top-0 text-[#2c2c2b] p-2 w-1/2'>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((data) => (
                                    <tr key={data?.descricao}>
                                        <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                        <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                        <td  className='border p-2 text-[#2c2c2b]'>{data.departamento}</td>
                                        <td  className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )

                case "familia":
                    return(
                        <>
                            <table className="w-2/4 border-collapse">
                                <thead>
                                    <tr>
                                        <th className='sticky top-0'></th>
                                        <th className='sticky top-0'></th>
                                        <th className='bg-[#edca62b4] sticky top-0 border text-[#2c2c2b] p-2 w-1/2'>Linha</th>
                                        <th className='bg-[#edca62b4] sticky top-0 border text-[#2c2c2b] p-2 w-1/2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <tr key={data?.descricao}>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.linha}</td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )

                case "grupo":
                    return(
                        <>
                            <table className="w-2/4 border-collapse">
                                <thead>
                                    <tr>
                                        <th className='sticky top-0'></th>
                                        <th className='sticky top-0'></th>
                                        <th className='bg-[#edca62b4] sticky top-0 border text-[#2c2c2b] p-2 w-1/2'>Familia</th>
                                        <th className='bg-[#edca62b4] sticky top-0 border text-[#2c2c2b] p-2 w-1/2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <tr key={data?.descricao}>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.familia}</td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )
                case "cor":
                    return(
                        <>
                        <table className="w-1/3 border-collapse">
                                <thead>
                                    <tr>
                                        <th className='sticky top-0'></th>
                                        <th className='sticky top-0'></th>
                                        <th className='bg-[#edca62b4] sticky top-0 border text-[#2c2c2b] p-2 w-full'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <tr key={data?.descricao}>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                            <td className='border p-2  text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        
                        </>
                    )
                    case "especificacao":
                    return(
                        <>
                        <table className="w-1/3 border-collapse">
                                <thead>
                                    <tr>
                                        <th className='sticky top-0'></th>
                                        <th className='sticky top-0'></th>
                                        <th className='bg-[#edca62b4] border sticky top-0 text-[#2c2c2b] p-2 w-full'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <tr key={data?.descricao}>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
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