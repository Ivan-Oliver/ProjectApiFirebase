import { FacebookAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const buttonFacebook = document.querySelector('#facebookLogin') 

buttonFacebook.addEventListener('click', async () => {

    const provider = new FacebookAuthProvider()

try {
    const credentials = await signInWithPopup (auth, provider)
    console.log(credentials)

    const face = document.querySelector("#x-login") 
    face.click();
    
    showMessage('Welcome' + " " + credentials.user.displayName, 'success')
} catch (error) {
    console.log(error)
}
})