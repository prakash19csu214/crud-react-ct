import CrudUser from "./components/CrudUser"
import "./styles/App.css"
import {BrowserRouter} from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
					<i class="fa fa-solid fa-bars"></i>
					<a href="/home"><strong>CRUD</strong></a>
						
					</div>
				</div>
			</header>
			<main>
				<CrudUser />
			</main>
		</>
		</BrowserRouter>
	)
}

export default App
