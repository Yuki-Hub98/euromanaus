"use Client";
import React , {useState} from "react";
import RegisterPessoa from "./registerPessoa";
import RegisterEndereco from "./registerEndereco";
import RegisterContato from "./registerContato";

const FormRegister = (props) => {
    const {type, 
    handleChange, 
    dataRepresentante, 
    dataFornecedor,
    request,
    fill,
    SetData
    } = props

    return(
        <>
        <form className="w-full flex flex-col ">
            <RegisterPessoa type={type} handleChange={handleChange} dataFornecedor={dataFornecedor} 
            dataRepresentante={dataRepresentante}/>
            <RegisterEndereco type={type} handleChange={handleChange} dataRepresentante={dataRepresentante} fillToCep={fill} 
            req={request} dataFornecedor={dataFornecedor} SetData={SetData}/>
            <RegisterContato type={type} handleChange={handleChange} dataFornecedor={dataFornecedor} 
            dataRepresentante={dataRepresentante} />
        </form>
        </>
    )


}

export default FormRegister