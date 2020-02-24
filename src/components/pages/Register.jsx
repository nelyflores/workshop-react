import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const register = (e) => {
	e.preventDefault();
	const form = e.target;
	const data = {
		name: form.name.value,
		email: form.email.value,
		password: form.password.value
	};
	Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
		.then(() => {
			alert('Usuario creado');
			window.location = '/login';
		})
		.catch((e) => console.log(e));
};

const Register = () => {
	return (
		<div className="ed-grid">
			<div className="l-block" />
			<div className="m-to-center m-60 lg-30">
				<h1 className="center">Crear cuenta</h1>
				<form onSubmit={register.bind()}>
					<div className="form__item">
						<label htmlFor="name">
							Nombre completo
							<input type="text" id="name" name="name" placeholder="Ingrese su nombre" />
						</label>
					</div>
					<div className="form__item">
						<label htmlFor="email">
							Correo electronico
							<input type="email" id="email" name="email" placeholder="Ingrese su email" />
						</label>
					</div>
					<div className="form__item">
						<label htmlFor="password">
							Contraseña
							<input type="password" id="password" name="password" placeholder="Ingrese su password" />
						</label>
					</div>
					<div className="form__item">
						<button className="button full" type="submit">
							Registrate
						</button>
					</div>
				</form>
				<div className="center">
					<p>
						¿Ya tienes cuenta de usuario? <Link to="/login">Inicia Sesión</Link>{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
