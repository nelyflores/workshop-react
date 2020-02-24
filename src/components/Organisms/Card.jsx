import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ picture, name, carId, path }) => {
	return (
		<article className="card s-border">
			<div className="img-container s-ratio-16-9">
				<Link to={`/${path}/${carId}`}>
					<img src={picture} alt={name} />
				</Link>
			</div>
			<div className="car__data s-pxy-2">
				<h3 className="t4 center">{name}</h3>
			</div>
		</article>
	);
};

export default Card;
