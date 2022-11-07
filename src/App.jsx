import { BrowserRouter as  Router, Link,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Registro from './components/Registro'
import NotFound from './components/NotFound';
import './App.css';
import Detalle from './components/Detalle';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Moneda from './components/Moneda';
import MonedaModificar from './components/MonedaModificar';

function App() {
  return (
    <>
    <div className = 'App'>
		  <Router>
			  <NavBar />
			  <Container>
			<Routes>
				<Route path= '/Registro' element={<Registro />} />
				<Route path ='/Login' element={<Login />} />
				<Route path ='/Home' element={<Home />} />
				<Route path ='/Moneda/alta' element={<Moneda />} />
				<Route path ='/Moneda/editar/:id' element={<MonedaModificar />} />
				<Route path='*' element={<NotFound />} />
				<Route path= '/Detalle/:id' element={<Detalle />} />

			</Routes>
			</Container>
		</Router>
	</div>
    </>
  );
}

export default App;
