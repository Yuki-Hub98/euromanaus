import { MdDeleteOutline } from "react-icons/md";
const TableMarkings = (props) => {
    const {data} = props
  
    return (
      <table className={`w-full table-auto whitespace-nowrap overflow-x-auto`}>
        <thead>
          <tr>
            <th className="p-2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b]">Código</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b]">Tipo</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b]">Descricao </th>
            <th className="p-2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b]">Quantidade</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b]">Valor Unitário</th>
            <th className="p-2 bg-[#CFCFCF] border outline-none sticky top-0 text-[#2c2c2b]">Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`border outline-none border-[#d9d9d9]  text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >
              <td className={`border outline-none border-[#d9d9d9]  text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >{item.codigo}</td>
              <td className={`border outline-none border-[#d9d9d9]  text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >{item.tipo}</td>
              <td className={`border outline-none border-[#d9d9d9]  text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >{item.etapaDeProducao || item.grupoRecurso || item.descricaoItem}</td>
              <td className={`border outline-none border-[#d9d9d9]  text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >{item.quantidade}</td>
              <td className={`border outline-none border-[#d9d9d9]  text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >{item.valorTotalUnitario || item.valorItem}</td>
              <td className={`border outline-none border-[#d9d9d9]  text-[#2c2c2b] ${item.hasOwnProperty('etapaDeProducao') ? 'bg-[#2c2c2b] text-white' : 'bg-[#F7F7F7]'}`} >{item.valorTotalRecurso || item.valorTotalItem}</td>
              <td className={`border outline-none border-[#d9d9d9]  text-[#2c2c2b] bg-[#F7F7F7] cursor-pointer hover:text-danger-500`}><MdDeleteOutline/></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default TableMarkings