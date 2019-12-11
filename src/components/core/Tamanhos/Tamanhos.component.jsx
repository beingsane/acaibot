import React from 'react'
import Copo from '../Copo/Copo.component'
import {copos} from '../../../utils/lista-copos'
import './Tamanhos.styles.css'

/**
 * @author Gabriel Costa <gabriel.moura@gsw.com.br>
 * @function Componente de Tamanhos exibe os diferentes tamanhos disponiveis de açai
 * */

const Tamanhos = () => {
	return (
		<section className='tamanhos-container'>
			<h3 className='tamanhos-title'>Tamanhos</h3>
			
			<div className='copos-container'>
				<Copo copos={copos}/>
			</div>
		</section>
	)
}
export default Tamanhos
