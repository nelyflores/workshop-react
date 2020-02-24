import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getCourse } from '../../redux/actionCreators';
import Banner from '../Organisms/Banner';

const Course = ({ course }) => {
	useEffect(() => {
		store.dispatch(getCourse(11));
	}, []);
	return (
		<React.Fragment>
			{course && (
				<React.Fragment>
					<Banner
						color="first-color"
						title={course.name}
						subtitle={course.information}
						image={{
							src: course.picture,
							alt: course.name
						}}
						home
						poster={course.picture}
					/>
					<main className="ed-grid lg-grid-10">
						<div className="lg-cols-7">
							<div className="course-feature" />
							<h2>Temario del curso</h2>
							<div>
								{course.data.classes.map((cl) => (
									<div>
										<h3>{cl.class.title}</h3>
									</div>
								))}
							</div>
						</div>
					</main>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
const mapStateToProps = (state) => ({
	course: state.coursetReducer.course
});

export default connect(mapStateToProps, {})(Course);
