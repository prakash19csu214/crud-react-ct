import CrudUser from "./components/CrudUser"
import "./styles/App.css"

function App() {
	return (
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
					<i class="fa fa-solid fa-bars"></i>
						<strong>CRUD</strong>
					</div>
				</div>
			</header>
			<main>
				<CrudUser />
			</main>
		</>
	)
}

export default App
