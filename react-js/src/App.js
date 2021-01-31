import './assets/styles/global.css';
import About from './sections/About';
import Cards from './sections/Cards';
import Info from './sections/Info';
import Welcome from './sections/Welcome';

function App() {
	return (
		<>
			<Welcome />
			<Cards />
			<About />
			<Info />
		</>
	);
}

export default App;
