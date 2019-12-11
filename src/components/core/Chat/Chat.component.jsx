/**
 * @author Gabriel Costa <gabriel.moura@gsw.com.br>
 * @function Componente de Chat importado do botframework-webchat
 *
 * */
import {DirectLine} from 'botframework-directlinejs'
import React from 'react'
import ReactWebChat from 'botframework-webchat'

import './Chat.style.css'

const Chat = props => {
	const directLine = new DirectLine({token: `${process.env.REACT_APP_API_KEY}`});
	
	const styleOptions = {
		botAvatarInitials: 'Bot',
		userAvatarInitials: props.name.charAt(0).toUpperCase(),
		userAvatarBackgroundColor: '#a832a8',
		botAvatarBackgroundColor: '#473147',
		hideUploadButton: true,
		sendBoxBackground: '#d1d1d1',
		sendBoxButtonColorOnHover: '#280E27',
		sendBoxTextColor: '#212121',
		bubbleFromUserBackground: '#280E27',
		bubbleFromUserBorderRadius: 30,
		bubbleBorderRadius: 30,
		bubbleFromUserTextColor: 'white',
		bubbleBackground: '#d4d4d4',
		timestampFormat: 'relative'
	};
	
	return (
		<ReactWebChat
			directLine={directLine}
			userID={props.name}
			styleOptions={styleOptions}
		/>
	
	)
};

export default Chat
