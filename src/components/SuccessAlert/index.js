import { useState, useEffect } from 'react';

const SuccessAlert = (data) => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (data) {
            setShowAlert(true)
        }
    },[data])

    useEffect(() => {
      // Mostrar o alerta quando showAlert se torna true
        if (showAlert) {
        const timeoutId = setTimeout(() => {
          // Ocultar o alerta após 3 segundos (ajuste conforme necessário)
            data?.CloseStatus()
            setShowAlert(false);
        }, 4000);

        // Limpar o temporizador ao desmontar o componente
        return () => clearTimeout(timeoutId);
        }
    }, [showAlert]);

    return (
        showAlert && (
            <div className="fixed top-0 right-0 mt-4 mr-4 bg-[#2c2c2b] text-[#c2af23] p-4 rounded shadow-lg transform opacity-100 translate-y-0 transition-transform transition-opacity duration-300 ease-in-out">
                {data?.message} <strong>Sucesso!</strong> 
            </div>
        )
    );
};

export default SuccessAlert;