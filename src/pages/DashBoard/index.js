import React from 'react'
import { logout } from '../../helpers/auth'

const DashBoard = () => {

	const handleLogout = async () => {
		await logout()
	}
	return (
		<>
			Dashboard
			<br />
			<button type="button" onClick={handleLogout}>Logout</button>
		</>
	)
}

export default DashBoard
