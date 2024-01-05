"use client";

import React from "react";
import Cadastro from '@/components/Cadastro';

export default function Caixa () {


    return (
        <>
        
        <div className="flex-grow">
            <input
            type="text"
            className="w-3/4 bg-white px-4 py-2 rounded-md"
            placeholder="Search..."
            />
        </div>
        <div className="flex items-center">
            <h1>Caixa</h1>
        </div>
        </>
    )
}