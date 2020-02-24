import React from 'react';

const Publication = ({ title, author, content, fecha }) => {
	return (
		<article className="publication l-block">
			<div className="publication__container">
				<h2 className="publication__title t3">{title}</h2>
				<span>
					<b>{author}</b> el día {fecha}
				</span>
				<div className="publicatio__content">
					<p>{content}</p>
				</div>
			</div>
		</article>
	);
};

export default Publication;
