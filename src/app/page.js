"use client";
import { DropDown } from "../components/DropDown";
import React, { useState, useEffect } from "react";
import {AiOutlinePlus} from 'react-icons/ai';


const fornecedor = [
  {
      id: 1,
      name:"Forncedor 1"
  },
  {
      id:2,
      name:'Fornecedor 2'
  },
  {
      id:3,
      name:'Fornecedor 3'
  },
  {
      id:4,
      name:'Fornecedor 4'
  },
  {
      id:5,
      name:'Fornecedor 5'
  },
]

export default function Home() {
    
    let valorTotalLiquido = 0;
    let valorCustoUnitarioLiquido = 0;
    let valorDescIcmsFrete = 0

    const [valorBruto, setValorBruto] = useState(null);
    const [valorLiquidoCalculado, setLiquidoCalculado] = useState(null)
    const [descComercial, setDescComercial] = useState(null);
    const [descIcms, setDescIcms] = useState(null);
    const [descPis, setDescPis] = useState(null);
    const [descConfins, setDescConfins] = useState(null);
    const [acresIpi, setAcresIpi] = useState(null);
    const [acresFrete, setAcresFrete] = useState (null);
    const [descIcsmsFrete, setIcmsFrete] = useState(null);
    const [descCredIcmsEntrada, setDesCredIcmsEntrada] = useState (null);
    
    const CalculoValorLiquido= (variavel) => {
      let result = 0;
      result = (variavel / 100) * valorBruto;
      valorTotalLiquido += parseFloat(result);
      return "R$ " + result.toFixed(2);
    }
    
    const CalcularCustoUnitarioLiquido = (variavel) =>{
      let valorLiquido = valorBruto - valorTotalLiquido;
      let result = 0;
      if(variavel === acresFrete){
        valorDescIcmsFrete = (variavel / 100) * valorLiquido ;
        valorCustoUnitarioLiquido -= valorDescIcmsFrete;
        return "R$ " + valorDescIcmsFrete.toFixed(2);
      }else if(variavel === descIcsmsFrete ){
        result = (variavel / 100) * valorDescIcmsFrete;
        valorCustoUnitarioLiquido += result
        return "R$ " + result.toFixed(2)
      }else{
        result = (variavel / 100) * valorLiquido;
        valorCustoUnitarioLiquido += result
        return "R$ " + result.toFixed(2)
      }
      
    }
    
    //console.log("valorTotalLiquido: ", valorTotalLiquido)
  return (
      
      <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0284c7] to-[#0ea5e9] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Cadastro de matéria prima
          </h2>
        </div>
          <form
            action="#"
            method="POST"
            className="mx-auto mt-16 max-w-6xl sm:mt-20">
              <div className="flex flex-row space-x-96">
                  {/* CADASTRO DE ITEM*/}
                <div className={`grid grid-cols-2 gap-x-8 gap-y-px sm:grid-cols-2`}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Cod. Fornecedor
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Fornecedor
                    </label>
                    <div className="relative mt-2.5">
                        <DropDown/>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Descrição do produto
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                      Grupo de Matéria Prima
                    </label>
                    <div className="mt-2.5 grid grid-cols-2 gap-x-44 items-center">
                      <div className="w-44">
                        <DropDown />
                      </div>
                        <div type="button" className=" flex w-8 h-8 text-white bg-blue-700 hover:bg-blue-800 rounded-lg items-center justify-center cursor-pointer">
                            <AiOutlinePlus size={18}/>
                        </div>
                    </div>
                  </div>
                  <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                      Unidade Util na Produção
                    </label>
                    <div className="relative mt-2.5">
                      <DropDown />
                    </div>
                  </div>
                  <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                      Unidade de Entrada
                    </label>
                    <div className="relative mt-2.5">
                      <DropDown />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                      Perda (%)
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Conversão
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Tipo de Máteria Prima
                    </label>
                    <div className="relative mt-2.5">
                      <DropDown />
                    </div>
                  </div>
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer ">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Ativo</span>
                    </label>
                  </div>
                  
                  {/* Fim Primeira parte do Form*/}
                </div>
                  {/** FIM DO CADASTRO DE ITEM */}
                  {/** ----------------------- */}
                  {/* CADASTRO DE VALORES DO ITEM*/}
                <div className={`grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2`}>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       Valor Unit. Bruto
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e)=>{setValorBruto(parseFloat(e.target.value))}}
                        />
                      </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (-) Desc. Comercial (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => {setDescComercial(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span>{ descComercial ? CalculoValorLiquido(descComercial) : ""}</span>
                        </div>
                      </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (-) Desc. ICMS (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => {setDescIcms(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span>{ descIcms ? CalculoValorLiquido(descIcms) : ""}</span>
                        </div>
                      </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (-) Desc. PIS (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e)=> {setDescPis(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span> { descPis ? CalculoValorLiquido(descPis) : ""}</span>
                        </div>
                      </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (-) Desc. CONFINS (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e)=> {setDescConfins(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span> { descConfins ? CalculoValorLiquido(descConfins) : ""}</span>
                        </div>
                      </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (+) Desc. IPI (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e)=> {setAcresIpi(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span> { acresIpi ? CalculoValorLiquido(acresIpi) : ""}</span>
                        </div>
                      </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Valor Liquido Calculado
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        defaultValue={(valorBruto - valorTotalLiquido).toFixed(2) === "0.00" ? "" : "R$ " + (valorBruto - valorTotalLiquido).toFixed(2)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (+) Frete (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e)=> {setAcresFrete(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span> { acresFrete ? CalcularCustoUnitarioLiquido(acresFrete) : ""}</span>
                        </div>
                      </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (-) ICMS Frente (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e)=> {setIcmsFrete(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span> { descIcsmsFrete ? CalcularCustoUnitarioLiquido(descIcsmsFrete) : ""}</span>
                        </div>
                      </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (-) Cred. ICMS Entrada (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e)=> {setDesCredIcmsEntrada(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span> { descCredIcmsEntrada ? CalcularCustoUnitarioLiquido(descCredIcmsEntrada) : ""}</span>
                        </div>
                      </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Custo Unitário Liquido
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        defaultValue={((valorBruto - valorTotalLiquido) - valorCustoUnitarioLiquido).toFixed(2) === "0.00" ? "" : "R$ " + ((valorBruto - valorTotalLiquido) - valorCustoUnitarioLiquido).toFixed(2)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                       (+) Valor Perda (%)
                      </label>
                      <div className="mt-2.5 grid grid-cols-2">
                        <input
                          type="text"
                          name="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e)=> {de(parseFloat(e.target.value))}}
                        />
                        <div className="flex items-center justify-center">
                          <span> {/* acresIpi ? Calculos[4](valorBruto, acresIpi) : "" */}</span>
                        </div>
                      </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Custo Utilizado Liquido
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        defaultValue={""}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Cancelar
                  </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Cadastrar 
                  </button>
                  </div>

                </div>
                  {/* FIM DO CADASTRO DE VALORES DO ITEM*/}
              </div>
          </form>
        
      </div>
    
  )
}
