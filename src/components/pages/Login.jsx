import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const authentication = (e) => {
	e.preventDefault();
	const form = e.target;
	const data = {
		email: form.email.value,
		password: form.password.value
	};
	Axios.post(`${process.env.REACT_APP_API_USER}/login`, data)
		.then((r) => {
			localStorage.setItem('token', r.data.token);
			window.location = '/';
		})
		.catch((e) => alert('Error al iniciar sesión'));
};
const Login = () => {
	return (
		<div className="ed-grid">
			<div className="l-block" />
			<div className="m-to-center m-60 lg-30">
				<h1 className="center">Iniciar sesión</h1>
				<form onSubmit={authentication.bind()}>
					<div className="form__item">
						<label htmlFor="email">
							Correo electronico
							<input type="email" id="email" name="email" placeholder="Ingrese su email" required />
						</label>
					</div>
					<div className="form__item">
						<label htmlFor="password">
							Contraseña
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Ingrese su contraseña"
								required
							/>
						</label>
					</div>
					<div className="form__item">
						<button type="submit" className="button full">
							Iniciar sesión
						</button>
					</div>
				</form>
				<div className="center">
					<p>
						¿No tienes cuenta de usuario? <Link to="/registro">Registrate</Link>{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
