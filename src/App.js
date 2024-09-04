import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import SideMenu from './Components/SideMenu';


const App = () => {
  return (
		<Routes>
			<Route path='/' element={<NavBar/>}>
				<Route exact path='/' element={<Home/>}/>
				<Route path='/SideMenu' element={<SideMenu/>} />
			</Route>
		</Routes>
  );
}

export default App;
