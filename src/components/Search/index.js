"use client";
import React , {useEffect, useState} from "react";
import {Button,  Input} from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";

const SearchArvore = (data) => {
    const [dataToGet, setDataToGet] = useState();
    const [dataSearchDesc, setDataSearchDesc] = useState();
    
    /*
    const [dataSearchOut, setDataSearchOut] = useState();
    const section = (name) => {
        switch (name) {
            case "Linha":
                return "Departamento"
            case "Familia":
                return "Linha"
            case "Grupo":
                return "Familia"
            default:
                break;
        }
    }
    
    const FormateToGet = (opcao) => {
        switch (opcao) {
            case 'Departamento':
                setDataToGet({'descricao': dataSearchDesc})
                break;
            case 'Linha':
                setDataToGet({'departamento': dataSearchOut, 'descricao': dataSearchDesc})
                break;
            case 'Familia':
                setDataToGet({'linha': dataSearchOut, 'descricao': dataSearchDesc})
                break;
            case 'Grupo':
                setDataToGet({'familia': dataSearchOut, 'descricao': dataSearchDesc})
                break;
            case 'Cor':
                setDataToGet({'descricao': dataSearchDesc})
                break;
            case 'Especificação':
                setDataToGet({'descricao': dataSearchDesc})
                break;
            default:
                break;
        }
    }
*/
    const FormateToGet = () => {
        return setDataToGet({'descricao': dataSearchDesc})
    }

    const Click = () => {
        if (dataSearchDesc) {
            return FormateToGet()
        }else{
            return data.ReceiveGetData();
        }
    }
    useEffect(() => {
        if (dataToGet) {
            return data.ReceiveGetData(dataToGet)
        }
    },[dataToGet])

    return(
        <form>
        <div className='flex flex-row h-12 justify-items-center items-center'>
                <Input className='w-80' labelPlacement={"outside-left"} onChange={(e) => setDataSearchDesc(RegexToSave(e.target.value))} color="primary" label="Descrição"/>
                {/*{data?.data?.type === 1 ? 
                <>
                <div className='pb-6'>
                    <Input className='w-80'  labelPlacement={'outside'} onChange={(e) => setDataSearchDesc(RegexToSave(e.target.value))} color="primary" label="Descrição"/>
                </div>
                </>
                :
                <>
                    <Input className='w-80'  labelPlacement={'outside'} onChange={(e) => setDataSearchOut(RegexToSave(e.target.value))} color="primary" label={section(data?.data?.name)}/>
                    <Input className='w-80'  labelPlacement={'outside'} onChange={(e) => setDataSearchDesc(RegexToSave(e.target.value))} color="primary" label="Descrição"/>
                </>
                } */}
                
            <Button color="primary" size="sm" variant="ghost" onClick={() => Click()} >
                Pesquisar
            </Button>
        </div>
        </form>
    )
}

export default SearchArvore