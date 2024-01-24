"use Client";
import React , {useEffect, useState} from "react";

const MiniSideBar = (data) => {
    const [option, setOption] = useState();
    return(
        <>
        <aside className='flex flex-col h-full w-40 border rounded-md bg-[#0000008e] left-64 '>
            {data.name?.map((name) => (
                <button key={name} onClick={(e) => {setOption(e.target.innerText)}}  className={`flex h-9 w-64 p-2 cursor-pointer text-center  font-normal text-[#D4D4D8]  hover: decoration-solid  dark:text-gray-900 hover:border-0 hover:text-[#edca62] rounded-lg `}>
                    <span>{name}</span>
                </button>
            ))}
        </aside>
        </>
    )
}

export default MiniSideBar