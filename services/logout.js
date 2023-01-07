import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

import { auth } from "./firebase.js"

const logout = document.getElementById('logout')

if (logout) {
    logout.addEventListener('click', async () => {
        await signOut(auth)
        // Borramos los datos del usuario cuando sale
        window.localStorage.removeItem('userInfo')
        location = '../index.html'
    })
}
