import React from 'react'
import './InputModal.styles.css'

const InputModal = props => {
	return (
		<div className='modal-container'>
			
			<h1 className='modal-title'>Olá, como devo te chamar?</h1>
			
			<input
				className='modal-input'
				placeholder='Digite seu nome...'
				onChange={props.onChange}
				autoFocus
			/>
			
			<button
				className='modal-button'
				disabled={props.disabled}
				onClick={props.onClick}
			>Continuar
			</button>
		</div>
	)
}

export default InputModal
