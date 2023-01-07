import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const signupForm = document.getElementById('signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
        const register = document.getElementById('x-register')
        register.click();

        showMessage("Welcome" + " " + userCredentials.user.email)
        location = '../views/dashboard.html'
    } catch (error) {
        if (error.code === 'auth/invalid-email') {
            showMessage('Invalid Email', "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage('Password Invalid', "error")
        } else if (error.code === 'auth/email-already-in-use') {
            showMessage('Email in used', "error")
        } else if (error.code) {
            showMessage('Something went wrong', "error")
        }
    }

})