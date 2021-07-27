import { useState } from 'react'
import data from '../../data/dataSucursal1.json'
import Bienvenida from '../../components/bienvenida/Bienvenida'
import Producto from '../../components/producto/Producto'
import AddFormProducto from '../../components/addformproducto/AddFormProducto'
import HomeContext from '../../context/HomeContext'

const Home = () => {
	const [ productos, setProductos ] = useState(data)

	const addProducto = (nuevoProducto: any) => {
		setProductos([ ...productos, nuevoProducto ])
	}

	return (
		<div className="container">
			<Bienvenida title="Bienvenidos" />
			<HomeContext.Provider value={{ addProducto }}>
				<AddFormProducto />
			</HomeContext.Provider>

			<div className="container">
				{
					<div className="row">
						<div className="col">
							{productos.map((producto) => {
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
		</div>
	)
}

export default Home
