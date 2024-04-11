"use client"
import { useState } from "react" 

const useMiniNavegation = (props) => {

  const [option, setOption] = useState(props);

  const ChosenOption = (option) => {
		setOption(option)
	}

  return {option, ChosenOption}


}

export default useMiniNavegation