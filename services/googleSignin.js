import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const buttonGoogle = document.getElementById('googleLogin')

buttonGoogle.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        // Guardamos en localStorage los datos del usuario
        window.localStorage.setItem('userInfo', JSON.stringify(credentials.user))
        window.localStorage.setItem('userDisplayName', JSON.stringify(credentials.user))

        const browser = document.getElementById('x-login')
        browser.click();

        showMessage('Welcome' + " " + credentials.user.displayName, 'success')
        location = '../views/dashboard.html'
    } catch (error) {
        console.log(error)
    }
})