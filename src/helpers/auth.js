import firebase from '../services/firebase'

export const register = (email, password) => {
	return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const login = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const signInWithGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	return firebase.auth().signInWithPopup(provider);
}

export const logout = () => {
	return firebase.auth().signOut()
}