/**
 * @author Gabriel Costa <gabriel.moura@gsw.com.br>
 * @function Componente de Adicionais que exibe o menu de adicionais
 * @function renderAdicional - Renderiza o componente de Adicionais dentro da Header do Cardápio
 * */

import React from 'react'
import './Adicionais.styles.css'
import listaAdicionais from '../../../utils/lista-adicionais'
import ExtraList from './ExtraList.component'

const Adicionais = () => {
	return (
		<section className='adicionais-container'>
			<header className='adicionais-title'>Adicionais</header>
			
			<ExtraList lista={listaAdicionais}/>
		
		</section>
	)
}
export default Adicionais
