const Tabela = (data) =>{

    const op = (opcao) => {
        switch (opcao) {
            case "Departamento":
                return(
                    <>
                        <table className="w-2/4 m-4 border-collapse">
                            <thead>
                                <tr>
                                    <th className='bg-gray-200 border p-2'>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data.map((dat) => (
                                    <>
                                        <tr>
                                            <td key={dat.descricao} className='border p-2'>{dat.descricao}</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </>
                )
            case "Linha":
                return(
                    <>
                        <table className="w-2/4 m-4 border-collapse">
                            <thead>
                                <tr>
                                    <th className='bg-gray-200 border p-2'>Departamento</th>
                                    <th className='bg-gray-200 border p-2'>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data.map((dat) => (
                                    <>
                                        <tr>
                                            <td key={dat.descricao} className='border p-2'>{dat.departamento}</td>
                                            <td key={dat.descricao} className='border p-2'>{dat.descricao}</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </>
                )

                case "Familia":
                    return(
                        <>
                            <table className="w-2/4 m-4 border-collapse">
                                <thead>
                                    <tr>
                                        <th className='bg-gray-200 border p-2'>Linha</th>
                                        <th className='bg-gray-200 border p-2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.data.map((dat) => (
                                        <>
                                            <tr>
                                                <td key={dat.descricao} className='border p-2'>{dat.linha}</td>
                                                <td key={dat.descricao} className='border p-2'>{dat.descricao}</td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )

                case "Grupo":
                    return(
                        <>
                            <table className="w-2/4 m-4 border-collapse">
                                <thead>
                                    <tr>
                                        <th className='bg-gray-200 border p-2'>Familia</th>
                                        <th className='bg-gray-200 border p-2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.data.map((dat) => (
                                        <>
                                            <tr>
                                                <td key={dat.descricao} className='border p-2'>{dat.familia}</td>
                                                <td key={dat.descricao} className='border p-2'>{dat.descricao}</td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )
                case "Cor":
                    return(
                        <>
                        <table className="w-2/4 m-4 border-collapse">
                                <thead>
                                    <tr>
                                        <th className='bg-gray-200 border p-2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.data.map((dat) => (
                                        <>
                                            <tr>
                                                <td key={dat.descricao} className='border p-2'>{dat.descricao}</td>
                                            </tr>
                                        </>
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


        <div className=' flex flex-col bg-white rounded items-center justify-center'>
                {op(data.name)}
        </div>
        </>
    )
}

export default Tabela