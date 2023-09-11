import "./App.css";
import Contenedor from "./components/Contenedor/Contenedor";
import Parrafo from "./components/Parrafo/Parrafo";
import Titulo from "./components/Titulo/Titulo";

function App() {
	return (
		<Contenedor>
			<Titulo />
			<Parrafo>Hola, soy un parrafo</Parrafo>
		</Contenedor>
	);
}

export default App;
