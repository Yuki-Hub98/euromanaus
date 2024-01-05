"use client";

import React from "react";
import Cadastro from '@/components/Cadastro';

export default function Caixa () {


    return (
        <>
        <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex-grow">
            <input
            type="text"
            className="w-3/4 bg-gray-700 text-gray-200 px-4 py-2 rounded-md"
            placeholder="Search..."
            />
        </div>
        <div className="flex items-center">
            <h1>Caixa</h1>
        </div>
            <Cadastro/>
        </nav>
        </>
    )
}