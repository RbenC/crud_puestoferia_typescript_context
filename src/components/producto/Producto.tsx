interface IProducto {
	id: string
	nombre: string
	precio: number
	cantidad: number
	unidad: string
	imagen: string
}

const Producto = ({ id, nombre, precio, cantidad, unidad, imagen }: IProducto) => {
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
				<button className="btn btn-outline-primary">🖉</button>
				<button className="btn btn-outline-danger">🗑</button>
			</div>
		</div>
	)
}

export default Producto
