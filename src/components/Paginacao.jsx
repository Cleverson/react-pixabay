import React from 'react'

const Paginacao = props => {
	return (
		<div className="py-3">
			<button
				onClick={props.paginaAnterior}
				type="button"
				className="btn btn-info mr-1">
				&larr; Anterior
			</button>
			<button
				onClick={props.paginaSeguinte}
				type="button"
				className="btn btn-info">
				Seguinte &rarr;
			</button>
		</div>
	)
}

export default Paginacao
