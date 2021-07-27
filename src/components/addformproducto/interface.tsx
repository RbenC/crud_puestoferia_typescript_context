export interface IFruta {
	nombre: string
	precio: number
	cantidad: number
	unidad: string
	imagen: string
}

export interface IdFruta extends IFruta {
	id: string
}
