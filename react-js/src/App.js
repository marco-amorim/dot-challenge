import './assets/styles/global.css';
import Footer from './components/Footer';
import About from './sections/About';
import Cards from './sections/Cards';
import Contact from './sections/Contact';
import Info from './sections/Info';
import Welcome from './sections/Welcome';

function App() {
	return (
		<>
			<Welcome />
			<Cards />
			<About />
			<Info />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
