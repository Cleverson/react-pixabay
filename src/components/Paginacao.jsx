import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Paginacao = props => {
	return (
		<div className="py-3">
			<button
				onClick={props.paginaAnterior}
				type="button"
				className="btn btn-info mr-1">
				<FaArrowLeft /> Anterior
			</button>
			<button
				onClick={props.paginaSeguinte}
				type="button"
				className="btn btn-info">
				Seguinte <FaArrowRight />
			</button>
		</div>
	)
}

export default Paginacao
