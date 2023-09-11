import "./App.css";
import { GlobalStyles } from "../src/styles/GlobalStyles";
import PokeApp from "./components/PokeApp/PokeApp";

function App() {
	return (
		<>
			<PokeApp />
			<GlobalStyles />
		</>
	);
}

export default App;
