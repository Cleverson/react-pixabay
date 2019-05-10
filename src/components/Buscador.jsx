import React, { Component, createRef } from 'react'

class Buscador extends Component {
	buscaRef = createRef()

	obterDados = e => {
		e.preventDefault()
		// Pegando o valor do input
		const termo = this.buscaRef.current.value
		// enviando para o component principal
		this.props.dadosBusca(termo)
	}

	render() {
		return (
			<form onSubmit={this.obterDados}>
				<div className="row">
					<div className="form-group col-md-8">
						<input
							type="text"
							ref={this.buscaRef}
							className="form-control form-control-lg"
							placeholder="Buscar..."
						/>
					</div>
					<div className="form-group col-md-4">
						<input
							type="submit"
							className="btn btn-lg btn-danger btn-block"
							value="Buscar..."
						/>
					</div>
				</div>
			</form>
		)
	}
}
export default Buscador
