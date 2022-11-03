import React, { useState } from "react"

const Form = ({ userData = {}, postUser, updateUser }) => {
	const [user, setUser] = useState({
		fname: userData.fname ?? "",
		lname: userData.lname ?? "",
		email: userData.email ?? "",
	})

	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const submitUser = e => {
		e.preventDefault()

		if (user.companiesId === "0") return

		if (userData.id) {
			updateUser(userData.id, user)
		} else {
			postUser(user)
		}
	}

	return (
		<form onSubmit={submitUser} className='row'>
			<input
				type='text'
				name='fname'
				value={user.fname}
				placeholder='First Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='lname'
				value={user.lname}
				placeholder='Last Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Create User" : "Update User"}`}
			/>
		</form>
	)
}

export default Form
