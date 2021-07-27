interface TProps {
	title: string
}

const bienvenida = ({ title }: TProps) => {
	return (
		<div className="container alert alert-dark text-start display-5">
			<img src="../../logo.png" alt="logo" width="20%" />
			<i className="fas fa-apple-alt m-1 text-danger" />
			<i className="fas fa-carrot m-1 text-warning" />
			<i className="fas fa-lemon m-1 text-success" />
			{title}
		</div>
	)
}

export default bienvenida
