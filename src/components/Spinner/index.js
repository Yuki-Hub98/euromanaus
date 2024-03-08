import React from 'react';

const Spinner = (props) => {
  /**
   * height/width: 20 é o tamanho do loading de pagina
   * btop/bbot: 5 é o tamanho do loading de pagina
   **/
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className={`animate-spin rounded-full h-20 w-20 border-t-5 border-b-5 border-[#edca62b4] animate-spin-slow`}></div>
      </div>
  );
};

export default Spinner;