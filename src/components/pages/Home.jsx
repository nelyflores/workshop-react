import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllPosts } from '../../redux/actionCreators';
import Publication from '../Organisms/Publication';

const Home = ({ posts }) => {
	useEffect(() => {
		store.dispatch(getAllPosts());
	}, []);
	return (
		<React.Fragment>
			<Banner
				image={{
					src: 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg',
					alt: 'Banner home'
				}}
				title="Bienvenido a la experiencia más increible en educacion online"
				subtitle="Nuerto equipo ha desarrollado esta plataforma pensando en ti. SAbemos que estás buscando contenido de calidad. Aquí lo encontrarás"
				color="dark-color"
				home
			/>
			<main className="ed-grid m-grid-3">
				<div className="l-section m-cols-2">
					<h2>Ultimas publicaciones</h2>
					{posts ? (
						<div>
							{posts.map((p) => (
								<Publication title={p.title} author={p.author} fecha={p.fecha} content={p.content} />
							))}
						</div>
					) : (
						<p>No esixten publicaciones en la BD</p>
					)}
				</div>
				<div>
					<h3>Lista de categorías</h3>
					<ul className="feature-list">
						<li>
							<span>React.js</span>
						</li>
						<li>
							<span>React native</span>
						</li>
						<li>
							<span>Angular</span>
						</li>
						<li>
							<span>Vue.js</span>
						</li>
						<li>
							<span>HTML</span>
						</li>
						<li>
							<span>CSS</span>
						</li>
					</ul>
				</div>
			</main>
		</React.Fragment>
	);
};
const mapStateToProps = (state) => ({
	posts: state.postReducer.posts
});

export default connect(mapStateToProps, {})(Home);
