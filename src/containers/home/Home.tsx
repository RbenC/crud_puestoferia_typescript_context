import { useState } from 'react'
import data from '../../data/dataSucursal1.json'
import Bienvenida from '../../components/bienvenida/Bienvenida'
import Producto from '../../components/producto/Producto'
import AddFormProducto from '../../components/addformproducto/AddFormProducto'
import HomeContext from '../../context/HomeContext'
import Swal from 'sweetalert2'
import EditFormProducto from '../../components/editformproducto/EditFormProducto'

const Home = () => {
	const [ productos, setProductos ] = useState(data)
	const [ edit, setEdit ] = useState(false)
	const [ editItem, setEditItem ] = useState({})

	const addProducto = (nuevoProducto: any) => {
		if (!nuevoProducto.nombre || nuevoProducto.nombre.length < 2) {
			Swal.fire('Escriba nombre de Producto')
		} else if (nuevoProducto.precio <= 0) {
			Swal.fire('Escriba precio de Producto')
		} else if (nuevoProducto.cantidad <= 0) {
			Swal.fire('Escriba cantidad de Producto')
		} else if (!nuevoProducto.unidad) {
			Swal.fire('Seleccione unidad de Producto')
		} else if (!nuevoProducto.imagen) {
			Swal.fire('Escriba la url de la imagen')
		} else {
			setProductos([ ...productos, nuevoProducto ])
		}
	}

	const deleteProducto = (id: string) => {
		Swal.fire({
			title: 'Seguro',
			text: 'Eliminar este Producto?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si'
		}).then((result) => {
			if (result.isConfirmed) {
				setProductos(productos.filter((producto) => producto.id !== id))
			}
		})
	}

	const updateProducto = (dataItem: {}) => {
		setEdit(true)
		setEditItem(dataItem)
		console.log(editItem)
	}
	const setUpdateProducto = (data: {}) => {
		console.log(data)
	}

	return (
		<div className="container">
			<Bienvenida title="Bienvenidos" />
			<HomeContext.Provider value={{ addProducto, deleteProducto, updateProducto, setUpdateProducto }}>
				{edit ? <EditFormProducto setEdit={setEdit} editItem={editItem} /> : <AddFormProducto />}
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
			</HomeContext.Provider>
		</div>
	)
}

export default Home
