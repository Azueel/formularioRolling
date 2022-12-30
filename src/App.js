import { RegistroInput } from './components/RegistroInput';
import { useState } from 'react';

function App() {
	const [listaUsuarios, setUsuarios] = useState([]);

	const agregarUsuariosLista = (nuevoUsuario) => {
		setUsuarios([...listaUsuarios, nuevoUsuario]);
	};

	console.log(listaUsuarios);

	return (
		<div>
			<h1 className="bg-dark text-white text-center p-2">Formulario</h1>

			<RegistroInput agregarUsuariosLista={agregarUsuariosLista} />
		</div>
	);
}

export default App;
