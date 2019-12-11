import React from 'react'
import WarningIMG from '../../../assets/error.png'
import './AuthFailed.styles.css'

const AuthFailed = () => {
	return (
		<div className='warning-container'>
			<img className='warning-img' src={WarningIMG} alt='Autentication failed warning'/>
			<p className='warning-text'>Por favor, autentique-se para falar com o Açaí Bot</p>
		</div>
	)
}

export default AuthFailed
