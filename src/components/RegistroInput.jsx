import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const RegistroInput = ({ agregarUsuariosLista }) => {
	const [user, setUser] = useState({
		nombre: '',
		email: '',
		edad: 0,
		contraseña: '',
		confirmarContraseña: '',
	});

	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	//forma de desestructurar
	//const {nombre,email,edad,contraseña,confirmarContraseña} = user

	const oninputChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			user.nombre.trim() === '' ||
			user.email.trim() === '' ||
			user.edad.trim() < 18 ||
			user.contraseña.trim() === '' ||
			user.confirmarContraseña.trim() === ''
		) {
			setError(true);
			return setErrorMsg('Todos los campos son obligatorios');
			// return setTimeout(() => {
			// 	setError(false);
			// }, 3000);
		} else if (user.confirmarContraseña !== user.contraseña) {
			setError(true);
			return setErrorMsg('Las contraseñas son diferentes');
		}

		setError(false);
		agregarUsuariosLista(user);
	};

	return (
		<div>
			<Form onSubmit={onSubmit} className="p-3">
				{error ? <p className="bg-danger w-100 text-center p-4 text-white fs-5">{errorMsg}</p> : ''}
				<Form.Group className="mb-3">
					<Form.Label>Nombre Completo</Form.Label>
					<Form.Control type="text" name="nombre" value={user.nombre} onChange={oninputChange} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Correo Electronico</Form.Label>
					<Form.Control type="email" name="email" value={user.email} onChange={oninputChange} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Edad</Form.Label>
					<Form.Control type="number" name="edad" value={user.edad} onChange={oninputChange} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control type="password" name="contraseña" value={user.contraseña} onChange={oninputChange} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Confirmar Contraseña</Form.Label>
					<Form.Control
						type="password"
						name="confirmarContraseña"
						value={user.confirmarContraseña}
						onChange={oninputChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Regristrarse
				</Button>
			</Form>
		</div>
	);
};
