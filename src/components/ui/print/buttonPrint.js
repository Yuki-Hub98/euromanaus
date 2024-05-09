"use client"
import React from 'react';
import { SlPrinter } from 'react-icons/sl';

const ButtonPrint = (props) => {
  const {data} = props

  const opePrint = () => {
    // URL da nova página que você deseja abrir
    const queryString = encodeURIComponent(JSON.stringify(data));
    const novaPaginaURL = `http://localhost:3000/print/ficha-tecnica?data=${queryString}`;
    // Abrir uma nova janela ou aba do navegador
    
    window.open(novaPaginaURL, '_blank', 'width=600,height=400');
  };

  return (
    <div>
      <button className="flex absolute top-10 right-3 text-[#edca62] hover:text-background-table" 
        onClick={() => opePrint()}> <SlPrinter size={20} /> </button>
    </div>
  );
}

export {ButtonPrint}
