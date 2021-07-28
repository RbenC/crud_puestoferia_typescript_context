import styles from './EditProduct.module.css'
import HomeContext from '../../context/HomeContext'
import { useContext } from 'react'
import useInput from '../../hooks/useInput'

interface Props {
    setEdit: (bool: boolean) => void;
    editItem:any;
}

const EditFormProducto = (props: Props) => {    
    const { updateProducto } = useContext(HomeContext)
    const [ nombre, setNombre ] = useInput(props.editItem.nombre)
	const [ precio, setPrecio ] = useInput(props.editItem.precio)
	const [ cantidad, setCantidad ] = useInput(props.editItem.cantidad)
	const [ unidad, setUnidad ] = useInput(props.editItem.cantidad)
	const [ imagen, setImagen ] = useInput(props.editItem.imagen)

    const EditSubmitProduct = (event:any) => {
        event.preventDefault();
        console.log('Editing');        
        let data={
            id:props.editItem.id,
            nombre:nombre,
            precio:precio,
            cantidad:cantidad,
            unidad:unidad,
            imagen:imagen
        }
        updateProducto(data)
        props.setEdit(false);
    }
    
    
	return (
		<>
		<div><h3>Editar Producto</h3></div>
		<div className={styles.abscenter}>			
			<form className="border p-3" onSubmit={(e) => EditSubmitProduct(e)}>
				<div className="form-group">
					<label className="form-label">Nombre</label>
					<input type="text" className="form-control" value={nombre} onChange={setNombre} />
				</div>
				<div className="form-group">
					<label className="form-label">Precio</label>
					<input type="number" className="form-control" value={precio} maxLength={20} onChange={setPrecio} />
				</div>
				<div className="form-group">
					<label className="form-label">Cantidad</label>
					<input
						type="number"
						className="form-control"
                        value={cantidad} onChange={setCantidad}
						maxLength={20}
						
					/>
				</div>
				<div className="form-group">
					<label className="form-label">Unidad</label>
					<select className="form-control" value={unidad} onChange={setUnidad} >
						<option value="value1">Und</option>
						<option value="value2">Kg</option>
						<option value="value3">Lts</option>
					</select>
					
					{/* <input type="text" className="form-control" value={unidad} maxLength={20} onChange={setUnidad} /> */}
				</div>
				<div className="form-group">
					<label className="form-label">Imagen</label>
					<input type="text" className="form-control" value={imagen} onChange={setImagen} />
				</div>

				<div className="d-grid">
					<button className="btn btn-primary my-4" onClick={()=>props.setEdit(true)}>
						Guardar
					</button>
				</div>
			</form>
		</div>
		</>
	)
}

export default EditFormProducto
