import useHandleChange from "@/hooks/ui/useHandleChange"
import { Button, Input } from "@nextui-org/react"

const SearchFornecedor = (props) => {
  const {ReceiveGet, name} = props
  const {dataHandleChange, handleChange, clearHandle} = useHandleChange()
  return(
    <>
    <div className='flex flex-row justify-center items-center gap-2'>
      <Input  className='w-64'
        label="Razão Social"
        labelPlacement={"outside"}
        placeholder=" "
        size="sm"
        onChange={(e) => handleChange(e)} name="razaoSocialFornecedor" color="primary"/>
      <Input  className='w-64'
        label="CPF/CNPJ"
        labelPlacement={"outside"}
        placeholder=" "
        size="sm"
        onChange={(e) => handleChange(e)} name="cpfCnpjFornecedor" color="primary"/>
      <Input  className='w-64'
        label="Nome Fantasia"
        labelPlacement={"outside"}
        placeholder=" "
        size="sm"
        onChange={(e) => handleChange(e)} name="nomeFantasiaFornecedor" color="primary"/>
      <div className="pt-6">
        <Button color="primary" type="submit" size='sm' variant="ghost"  onClick={() =>  {ReceiveGet(name, dataHandleChange), clearHandle()}}>
          Pesquisar
        </Button>
      </div>
    </div>
    </>
  )
}

export default SearchFornecedor