import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { register } from '../../helpers/auth'

const initialState = {
	email: '',
	password: ''
}
const Register = () => {
	const [values, setValues] = useState(initialState)
	const history = useHistory()
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
			const res = await register(values.email, values.password)
			console.log(res)
			history.push('/login')
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="email" value={values.email} onChange={handleChange} placeholder="email" name="email" />
				<input type="password" value={values.password} onChange={handleChange} placeholder="password" name="password" />
				<button type="submit">Register</button>
			</form>
		</>
	)
}

export default Register
