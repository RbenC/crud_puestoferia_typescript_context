import { useEffect } from "react"

// function useTitle(title:string){
//     useEffect (() => {
//         document.title = title
        
//     })
// }

const useTitle = (title:string):void => {   // exactamente igual a la función anterior pero convertida a arrow function 
    useEffect(() => {                       // el void retorn undefine
        document.title = title
    })
}

export default useTitle;
