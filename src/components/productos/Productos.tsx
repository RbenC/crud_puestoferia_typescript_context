import Producto from '../../components/producto/Producto'
// import { IFruta } from '../addformproducto/interface'

const Productos = (productos: any) => {
	return (
		<div className="container">
			{
				<div className="row">
					<div className="col">
						{productos.map((producto: any) => {
							return (
								<Producto
									key={producto.id}
									id={producto.id}
									nombre={producto.nombre}
									precio={producto.precio}
									cantidad={producto.cantidad}
									unidad={producto.unidad}
									imagen={producto.imagen}
								/>
							)
						})}
					</div>
				</div>
			}
		</div>
	)
}

export default Productos
