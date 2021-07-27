import { useState } from "react";

const useInput = (initialState: any)=>  {
    const [val, setVal] = useState(initialState)

    const handleChange = (event:any) =>{
        const { value } = event.target
        setVal(value)
    }

    return[val, handleChange];


}

export default useInput;