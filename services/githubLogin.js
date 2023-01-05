import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const buttongithub = document.querySelector('#githubLogin') 

buttongithub.addEventListener('click', async () => {

    const provider = new GithubAuthProvider()

try {
    const credentials = await signInWithPopup (auth, provider)
    console.log(credentials)

    const github = document.querySelector("#x-login") 
    github.click();
    
    showMessage('Welcome' + " " + credentials.user.displayName, 'success')
    location = '../views/dashboard.html'
} catch (error) {
    console.log(error)
}
})