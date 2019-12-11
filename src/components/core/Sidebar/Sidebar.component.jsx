/**
 * @author Gabriel Costa <gabriel.moura@gsw.com.br>
 * @function Componente que reune as informações necessárias para o Cardápio
 
 * */

import React from 'react'
import './Sidebar.styles.css'
import Tamanhos from '../Tamanhos/Tamanhos.component'
import SidebarHeader from '../SidebarHeader/SidebarHeader.component'

export default function SidebarComponent() {
	
	return (
		<nav className='sidebar-container'>
			<SidebarHeader/>
			<Tamanhos/>
		</nav>
	)
}
