import { useContext } from 'react'
import HomeContext from '../../context/HomeContext'

interface IProducto {
	id: string
	nombre: string
	precio: number
	cantidad: number
	unidad: string
	imagen: string
}

const Producto = ({ id, nombre, precio, cantidad, unidad, imagen }: IProducto) => {
	const { deleteProducto, updateProducto } = useContext(HomeContext)

	const configurar = () => {
		alert('Hola')
		let data = {
			id: id,
			nombre: nombre,
			precio: precio,
			cantidad: cantidad,
			unidad: unidad,
			imagen: imagen
		}
		updateProducto(data)
	}

	return (
		<div key={id} className="row border border-success p-1 m-1">
			<div className="col text-start">{nombre}</div>
			<div className="col">{precio}</div>
			<div className="col">{unidad}</div>
			<div className="col">
				<img src={imagen} alt={nombre} width="20%" />
			</div>
			<div className="col">
				{cantidad} {unidad} disponibles
			</div>
			<div className="col">
				<button className="btn btn-outline-primary" onClick={configurar}>
					🖉
				</button>
				<button className="btn btn-outline-danger" onClick={() => deleteProducto(id)}>
					🗑
				</button>
			</div>
		</div>
	)
}

export default Producto
