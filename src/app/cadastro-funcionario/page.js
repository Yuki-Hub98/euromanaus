"use client";

import React, { useState, useEffect } from "react";
import {AiOutlinePlus} from 'react-icons/ai';

export default function cadastroFun () {
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
              Cadastro Fonecedor
            </h2>
          </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-6xl sm:mt-20">
                <div className="flex flex-row flex space-x-96">
                    {/* CADASTRO DE ITEM*/}
                  <div className={`grid grid-cols-2 gap-x-8 gap-y-px sm:grid-cols-2`}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Nome Fantasia
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
                          Razão Social
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
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        CPF/CNPJ
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
                        INSCR. Social/ RG
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
                        Regime Tributário
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
                        CEP
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
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                        Endereço
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
                          Número
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
                          Bairro
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
                </div>
            </form>
        </div>
      
    )
}