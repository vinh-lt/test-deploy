import React, { useState } from 'react'
import { login, signInWithGoogle } from '../../helpers/auth'

const initialState = {
	email: '',
	password: ''
}
const Login = () => {
	const [values, setValues] = useState(initialState)
	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await login(values.email, values.password)
		} catch (err) {
			console.log(err)
		}
	}

	const handleGoogleLogin = async () => {
		try {
			await signInWithGoogle()
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="email" value={values.email} onChange={handleChange} placeholder="email" name="email" />
				<input type="password" value={values.password} onChange={handleChange} placeholder="password" name="password" />
				<button type="submit">Login</button>
				<br />
				<button type="button" onClick={handleGoogleLogin}>Login with Google</button>
			</form>
		</>
	)
}

export default Login
