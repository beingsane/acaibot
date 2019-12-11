import React from 'react'
import './Copo.styles.css'

const Copo = ({copos}) => (
	
	copos.map(
		copo => (
			
			<div className='copo' key={copo.id}>
				<div className={copo.img}/>
				<label className='label-tamanho'>{copo.tamanho}</label>
				<label className='label-preco'>R${copo.preco}</label>
			</div>
		
		)
	)
)
export default Copo
