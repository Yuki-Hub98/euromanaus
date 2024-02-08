"use client";
import React , {useEffect, useState} from "react";
import {Button,  Input} from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";

const SearchArvore = (props) => {
    const [dataToGet, setDataToGet] = useState();
    const [dataSearchDesc, setDataSearchDesc] = useState();
    const {ReceiveGet} = props
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
    const Clear = () => {
        setDataToGet(null)
        setDataSearchDesc(null)
    }

    const Click = () => {
        if (dataSearchDesc) {
            return setDataToGet({'descricao': dataSearchDesc})
        }else{
            return ReceiveGet(props?.data?.option);
        }
    }

    useEffect(() => {
        if (dataToGet) {
            ReceiveGet(props?.data?.option, dataToGet);
            Clear();
        }
    })

    return(
        <form>
        <div className='h-12 flex flex-row justify-items-center items-center'>
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
                
            <Button color="primary" size="sm" variant="ghost" onClick={() =>  Click()} >
                Pesquisar
            </Button>
        </div>
        </form>
    )
}

export default SearchArvore