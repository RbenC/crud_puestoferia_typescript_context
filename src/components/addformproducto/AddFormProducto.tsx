import styles from './AddProduct.module.css'
import { useContext } from 'react'
import useInput from '../../hooks/useInput'
import HomeContext from '../../context/HomeContext'

const { v4: uuidv4 } = require('uuid')

const AddProducto = () => {
	const { addProducto } = useContext(HomeContext)
	const [ nombre, setNombre ] = useInput('')
	const [ precio, setPrecio ] = useInput(0)
	const [ cantidad, setCantidad ] = useInput(0)
	const [ unidad, setUnidad ] = useInput('Kg')
	const [ imagen, setImagen ] = useInput('Https://')

	const addSubmitProduct = (event: any) => {
		event.preventDefault()
		let data = {
			id: uuidv4(),
			nombre: nombre,
			precio: precio,
			cantidad: cantidad,
			unidad: unidad,
			imagen: imagen
		}
		addProducto(data)
	}

	return (
		<>
		<div><h3>Agregar Nuevo Producto</h3></div>
		<div className={styles.abscenter}>			
			<form className="border p-3" onSubmit={(e) => addSubmitProduct(e)}>
				<div className="form-group">
					<label className="form-label">Nombre</label>
					<input type="text" className="form-control" value={nombre} maxLength={20} onChange={setNombre} />
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
						value={cantidad}
						maxLength={20}
						onChange={setCantidad}
					/>
				</div>
				<div className="form-group">
					<label className="form-label">Unidad</label>
					<input type="text" className="form-control" value={unidad} maxLength={20} onChange={setUnidad} />
				</div>
				<div className="form-group">
					<label className="form-label">Imagen</label>
					<input type="text" className="form-control" value={imagen} maxLength={100} onChange={setImagen} />
				</div>

				<div className="d-grid">
					<button className="btn btn-primary my-4" type="submit">
						Enviar
					</button>
				</div>
			</form>
		</div>
		</>
	)
}

export default AddProducto
