import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';

import './Login.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		console.log('login to ap');
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						photoUrl: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => alert(error));
	};

	const register = () => {
		console.log('register');
		if (!name) {
			return alert('Please enter a full name');
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG34.png" alt="" />
			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Full name (required if registering)"
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					type="text"
					placeholder="Profil pic URL (optional)"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<button type="submit" onClick={loginToApp}>
					Sign in
				</button>
			</form>

			<p>
				Not a member ?{' '}
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
