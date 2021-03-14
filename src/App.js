import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/DashBoard'
import Login from './pages/Login'
import Register from './pages/Register'
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import firebase from './services/firebase'
import { useEffect, useState } from 'react';

function App() {
	const [authenticated, setAuthenticated] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setAuthenticated(true)
				setLoading(false)
			} else {
				setAuthenticated(false)
				setLoading(false)
			}
		})

		return () => unsubscribe()
	}, [])

	return (
		loading === true ? <h2>Loading...</h2> :
			(<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/register" component={Register} />
					<PublicRoute path="/login" authenticated={authenticated} component={Login} />
					<PrivateRoute path="/dashboard" authenticated={authenticated} component={Dashboard} />
				</Switch>
			</BrowserRouter>)
	);
}

export default App;
