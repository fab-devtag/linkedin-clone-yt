import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';

import './App.css';

import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			}
			setIsLoad(true);
		});
	}, []);

	return (
		<div className="app">
			<Header />
			{!isLoad ? null : !user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}
		</div>
	);
}

export default App;
