import { GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const buttonGoogle = document.querySelector('#googleLogin') 

buttonGoogle.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()

try {
    const credentials = await signInWithPopup (auth, provider)
    console.log(credentials)

    const browser = document.querySelector("#x-login") 
    browser.click();
    
    showMessage('Welcome' + " " + credentials.user.displayName, 'success')
    location = '../views/dashboard.html'
} catch (error) {
    console.log(error)
}
})