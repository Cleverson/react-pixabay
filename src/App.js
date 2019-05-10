import React, { Component } from 'react'
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {
	state = {
		termo: '',
		imagens: [],
		pagina: ''
	}

	scroll = () => {
		const elemento = document.querySelector('.jumbotron')
		elemento.scrollIntoView('smooth', 'start')
	}

	consultarApi = () => {
		const termo = this.state.termo
		const pagina = this.state.pagina

		const url = `https://pixabay.com/api/?key=12450283-2dcb54f36bd9dc710e6bb04ad&q=${termo}&per_page=20&page=${pagina}`

		fetch(url)
			.then(resp => resp.json())
			.then(result => this.setState({ imagens: result.hits }))
	}

	dadosBusca = termo => {
		this.setState(
			{
				termo: termo,
				pagina: 1
			},
			() => {
				this.consultarApi()
			}
		)
	}

	paginaAnterior = () => {
		let pagina = this.state.pagina

		if (pagina === 1) return null

		pagina--

		this.setState({ pagina }, () => {
			this.consultarApi()
			this.scroll()
		})
	}

	paginaSeguinte = () => {
		let pagina = this.state.pagina

		pagina++

		this.setState({ pagina }, () => {
			this.consultarApi()
			this.scroll()
		})
	}

	render() {
		return (
			<div className="app container">
				<div className="jumbotron">
					<p className="lead text-center">Buscador de Imagens</p>
					<Buscador dadosBusca={this.dadosBusca} />
				</div>
				<div className="row justify-content-center">
					<Resultado
						imagens={this.state.imagens}
						paginaAnterior={this.paginaAnterior}
						paginaSeguinte={this.paginaSeguinte}
					/>
				</div>
			</div>
		)
	}
}

export default App
