import React from 'react'; 
import {IFruta} from '../components/addformproducto/interface'
const HomeContext = React.createContext({
    addProducto:(objeto:IFruta)=>{},
    deleteProducto:(id:string)=>{},
    updateProducto:(objeto:IFruta)=>{},
    setUpdateProducto:(objecto:IFruta)=>{},

})

export default HomeContext; 