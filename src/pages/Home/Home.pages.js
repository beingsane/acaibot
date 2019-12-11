import React, {useState} from 'react'
// Componentes
import Sidebar from '../../components/core/Sidebar/Sidebar.component'
import AuthFailed from '../../components/shared/AuthFailed/AuthFailed.component'
import InputModal from '../../components/shared/InputModal/InputModal.component'
import Authenticate from '../../services/authenticate'
import Chat from '../../components/core/Chat/Chat.component'
import Toast from '../../components/shared/Toast/Toast'
// Estilizações
import './Home.styles.css'

const Home = () => {
	
	const [name, setName] = useState('')
	const [valid, setValid] = useState(false)
	const [visible, setVisibility] = useState(true)
	
	// Verifica se o nome inserido pelo usuario é minimamente válido
	const verify = () => {
		if (name !== '' && name.length >= 3)
			return false
		else return true
	}
	
	// Invoca o método que realiza a Autenticação do usuario
	// e se o usuario for validado, altera o estado
	const handleLogin = async () => {
		
		const token = await Authenticate()
		
		if (!token) {
			Toast.fire({
				icon: 'error',
				title: 'Algo deu errado na sua autenticação, tente novamente!'
			})
		}
		setVisibility(!visible)
		setValid(true)
		Toast.fire({
			icon: 'success',
			title: `Olá ${name} =)\nVocê foi autenticado com sucesso ;)`
		})
		
	}
	
	return (
		<>
			{
				visible ?
					<InputModal
						disabled={verify()}
						onChange={e => setName(e.target.value)}
						onClick={handleLogin}
					/>
					: null
			}
			
			<div className='home-container'>
				
				<nav className='home-sidebar'>
					<Sidebar/>
				</nav>
				
				<div className='home-main'>
					{valid ? <Chat name={name}/> : <AuthFailed/>}
				</div>
			
			</div>
		
		</>
	
	)
}

export default Home
