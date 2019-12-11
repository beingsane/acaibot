import axios from 'axios'

const Authenticate = () => {
	return axios.post(
		'https://directline.botframework.com/v3/directline/tokens/generate',
		{},
		{
			headers: {Authorization: `bearer ${process.env.REACT_APP_API_KEY}`}
		}
	)
		.then(
			resposta => {
				const {data} = resposta // IDConversa e Token
				
				if (data) {
					// console.log('autenticado',data.token)
					
					return startConversation(data.token)
				}
			}
		).catch(
			error => {
				console.log(error)
			})
}

const startConversation = token => {
	return axios.post(
		'https://directline.botframework.com/v3/directline/conversations',
		{},
		{
			headers: {
				Authorization: `bearer ${token}`
			}
		}
	).then(
		resposta => {
			const {token} = resposta.data
			sessionStorage.setItem('token', token)
			return token
		}
	).catch(
		err => console.log(err)
	)
}

export default Authenticate
