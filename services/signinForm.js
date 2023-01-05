import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signInForm = document.querySelector("#signin-form");

signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['signin-email'].value;
    const password = signInForm['signin-password'].value;
    
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
        const access = document.querySelector("#x-login") 
        access.click(); 

        showMessage("Welcome" + " " + credentials.user.email)
        location = '../views/dashboard.html'
    } catch (error) {
        if(error.code === "auth/wrong-password") {
            showMessage('Wrong password', 'error')
        } else if (error.code === "auth/user-not-found") {
            showMessage('User not found', 'error')
        } else {
            showMessage(error.message, 'error')
        }
    }

})