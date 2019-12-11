import React from 'react'

import {Route, Router, Switch} from 'react-router-dom'
// HISTORY
import history from './history'
// PAGINAS
import Home from '../pages/Home/Home.pages'
import NotFoundPages from '../pages/NotFound/NotFound.pages'

const Routes = () => (
	
	<Router history={history}>
		<Switch>
			<Route component={Home} path='*/'/>
			
		</Switch>
	</Router>
)
export default Routes
