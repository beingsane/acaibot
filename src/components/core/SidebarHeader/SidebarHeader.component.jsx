import React from 'react'
import Adicionais from "../Adicionais/Adicionais.component";
import './SidebarHeader.styles.css'

const Header = () => {
	return (
		<div className='sidebar-header'>
			
			<div className='sidebar-title-container'>
				
				<h1 className='sidebar-title'>Cardápio</h1>
			
			</div>
			
			<Adicionais/>
		</div>
	)
}

export default Header
