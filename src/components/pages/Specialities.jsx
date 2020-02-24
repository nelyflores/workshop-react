import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllSpecialities } from '../../redux/actionCreators';
import Card from '../Organisms/Card';

const Specialities = ({ specialities }) => {
	useEffect(() => {
		store.dispatch(getAllSpecialities());
	}, []);
	return (
		<React.Fragment>
			<Banner
				color="first-color"
				image={{
					src: 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg',
					alt: 'Banner especialides'
				}}
				title="Especialidades"
				subtitle="domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
			/>
			{specialities && (
				<main className="ed-grid m-grid-3">
					{specialities.map((s) => (
						<Card Key={s.id} picture={s.picture} name={s.name} carId={s.id} path="especialidades" />
					))}
				</main>
			)}
		</React.Fragment>
	);
};
const mapStateToProps = (state) => ({
	specialities: state.specialityReducer.specialities
});

export default connect(mapStateToProps, {})(Specialities);
