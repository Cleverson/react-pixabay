import React, { Component, Fragment } from 'react'
import Imagem from './Imagem'
import Paginacao from './Paginacao'

class Resultado extends Component {
	mostrarImagens = () => {
		const imagens = this.props.imagens

		if (imagens.length === 0) return null
		return (
			<Fragment>
				<div className="col-12 p-5 row">
					{imagens.map(imagem => (
						<Imagem key={imagem.id} imagem={imagem} />
					))}
				</div>
				<Paginacao
					paginaAnterior={this.props.paginaAnterior}
					paginaSeguinte={this.props.paginaSeguinte}
				/>
			</Fragment>
		)
	}

	render() {
		return <Fragment>{this.mostrarImagens()}</Fragment>
	}
}
export default Resultado
