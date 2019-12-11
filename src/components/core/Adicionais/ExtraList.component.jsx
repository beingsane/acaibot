import React from 'react'
import './Adicionais.styles.css'

const ExtraList = ({lista}) => {
	return (
		<ul className='adicionais-list'>
			{
				lista.map(
					adicional => (
						<li key={adicional.id}>
							<span>{adicional.nome}</span>
							<span>R${adicional.preco}</span>
						</li>
					)
				)
			}
		</ul>
	)
}
export default ExtraList
