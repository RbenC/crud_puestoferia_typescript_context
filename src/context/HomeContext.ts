import React from 'react'; 
import {IFruta} from '../components/addformproducto/interface'
const HomeContext = React.createContext({addProducto:(objeto:IFruta)=>{}})

export default HomeContext; 