import React from 'react'
import {
	FaThumbsUp,
	FaEye,
	FaHeart,
	FaComments,
	FaArrowLeft,
	FaArrowRight
} from 'react-icons/fa'

const Imagem = props => {
	const {
		largeImageURL,
		likes,
		previewURL,
		tags,
		views,
		favorites,
		comments
	} = props.imagem
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
			<div className="card">
				<h6 className="card-header">{tags}</h6>
				<img src={previewURL} alt={tags} className="card-img-top" />
				<div className="card-body">
					<p className="card-text">
						<FaHeart /> {favorites} Favoritos
					</p>
					<p className="card-text">
						<FaComments /> {comments} Comentários
					</p>
					<p className="card-text">
						<FaThumbsUp /> {likes} curtidas
					</p>
					<p className="card-text">
						<FaEye /> {views} Visualizações
					</p>
				</div>
				<div class="card-footer text-muted">
					<a
						href={largeImageURL}
						target="_blank"
						className="btn btn-primary btn-blocker">
						Ver Imagem
					</a>
				</div>
			</div>
		</div>
	)
}

export default Imagem
