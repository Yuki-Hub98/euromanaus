import { useState, useEffect } from 'react';

const SuccessAlert = (props) => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (props) {
            setShowAlert(true)
        }
    },[props])

    useEffect(() => {
      // Mostrar o alerta quando showAlert se torna true
        if (showAlert) {
        const timeoutId = setTimeout(() => {
          // Ocultar o alerta após 3 segundos (ajuste conforme necessário)
            props?.CloseStatus()
            setShowAlert(false);
        }, 4000);

        // Limpar o temporizador ao desmontar o componente
        return () => clearTimeout(timeoutId);
        }
    });

    return (
        showAlert && (
            <div className="fixed top-0 right-0 mt-4 mr-4 bg-[#2c2c2b] text-[#c2af23] p-4 rounded shadow-lg transform opacity-100 translate-y-0 transition-opacity duration-300 ease-in-out">
                {props?.message}
            </div>
        )
    );
};

export default SuccessAlert;