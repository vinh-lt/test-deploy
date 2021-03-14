import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from '../runtimeconfig.json'

let api_key, auth_domain, project_id, storage_bucket, messaging_sender_id, app_id
if (config.services !== undefined) {
	api_key = config.services.api_key
	auth_domain = config.services.auth_domain
	project_id = config.services.project_id
	storage_bucket = config.services.storage_bucket
	messaging_sender_id = config.services.messaging_sender_id
	app_id = config.services.app_id
}

const firebaseConfig = {
	apiKey: api_key,
	authDomain: auth_domain,
	projectId: project_id,
	storageBucket: storage_bucket,
	messagingSenderId: messaging_sender_id,
	appId: app_id
};

// const firebaseConfig = {
// 	apiKey: "AIzaSyCaiZrkkj-3rOmroedTfxjClky0PMt3xUk",
// 	authDomain: "test-deploy-d71b8.firebaseapp.com",
// 	projectId: "test-deploy-d71b8",
// 	storageBucket: "test-deploy-d71b8.appspot.com",
// 	messagingSenderId: "659966722",
// 	appId: "1:659966722:web:5538b0b1454cf14e63901b"
// };

firebase.initializeApp(firebaseConfig)

export default firebase