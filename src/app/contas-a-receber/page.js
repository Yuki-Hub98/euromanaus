"use client";

import React from "react";
import Cadastro from '@/components/Cadastro';

export default function ContasReceber () {

    return (
        <>
        <div className="flex-grow">
            <input
            type="text"
            className="w-3/4 bg-gray-700 text-gray-200 px-4 py-2 rounded-md"
            placeholder="Search..."
            />
        </div>
        <div className="flex items-center">
            <h1>Contas a Receber</h1>
        </div>
        </>
    )
}