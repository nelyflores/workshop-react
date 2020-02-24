import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import { getAllCourses } from '../../redux/actionCreators';
import store from '../../redux/store';
import Card from '../Organisms/Card';

const Courses = ({ courses }) => {
	useEffect(() => {
		store.dispatch(getAllCourses());
	}, []);
	return (
		<React.Fragment>
			<Banner
				color="dark-color"
				image={{
					src: 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg',
					alt: 'Banner cursos'
				}}
				title="Nuestros cursos"
				subtitle="comienza desde cero hoy mismo"
			/>
			{courses && (
				<main className="ed-grid m-grid-5">
					{courses.map((c) => (
						<Card key={c.name} picture={c.picture} name={c.name} path="cursos" carId={c.id} />
					))}
				</main>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	courses: state.coursetReducer.courses
});

export default connect(mapStateToProps, {})(Courses);
