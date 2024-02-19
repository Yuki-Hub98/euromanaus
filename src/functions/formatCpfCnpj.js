const CpfCnpj = (cpfCnpj) => {
		let cpfCnpjFormat = ''
		if(cpfCnpj?.length > 10 && cpfCnpj?.length < 12){
				cpfCnpjFormat = cpfCnpj?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
		}else if (cpfCnpj?.length === 14) {
				cpfCnpjFormat = cpfCnpj?.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
		}
		
		return cpfCnpjFormat
}

export default CpfCnpj