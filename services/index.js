const spinnerElement = document.getElementById("spinner");
const allBooks = document.getElementById('allListBooks') // Selecciono el elemento del HTML 
const userInfo = window.localStorage.getItem('userInfo')
const userDisplayName = window.localStorage.getItem('userDisplayName')
if (userInfo) {
   document.getElementById('userEmail').innerText = JSON.parse(userInfo).email
}
if (userDisplayName) {
   document.getElementById('userName').innerText = JSON. parse(userDisplayName).displayName
}



async function fetchAllData() {
   //Llamamos a la Api, que devuelve un array de libros.
   const list = await fetchListBooks()
   spinnerElement.setAttribute('class', 'hidden')
   allBooks.removeAttribute('class', 'hidden')
   allBooks.setAttribute('class', 'parentbox')
   // Recorremos todos los libros y vamos pintando en el DOM los elementos HTML que necesitamos para montar los 
   //cuadros con la info de los libros, con sus class correspondientes para los estilos
   for (let i = 0; i < list.length; i++) {

      const item = list[i]
      //Recuperamos el div vacio donde vamos a pintar todo el HTML
      const actualListElementContainer = document.createElement('div')
      actualListElementContainer.setAttribute("class", "box")

      //Creamos los elementos HTML a pintar
      const elementTitle = document.createElement('h3')
      elementTitle.setAttribute("class", "title")
      elementTitle.innerText = item.list_name

      const elementDate = document.createElement('p')
      elementDate.setAttribute("class", "date")
      elementDate.innerText = ("Oldest:" + ' ' + item.oldest_published_date)
      // Es igual que: <p>Oldest:blablabla</p>

      const elementDateUpdate = document.createElement('p')
      elementDateUpdate.setAttribute("class", "dateUpdate")
      elementDateUpdate.innerText = ("Newest:" + ' ' + item.newest_published_date)

      const elementUpdated = document.createElement('p')
      elementUpdated.setAttribute("class", "dateUpdateRange")
      elementUpdated.innerText = ("Updated:" + ' ' + item.updated)

      const button = document.createElement("a")
      button.setAttribute("class", "buttonDetails")

      button.setAttribute("href", "../views/details.html")
      button.innerText = ("READ MORE!")
      const buttonIcon = document.createElement('i')
      buttonIcon.setAttribute('class', 'fa-solid fa-angle-right')
      button.appendChild(buttonIcon)

      button.onclick = () => {
         localStorage.setItem(localStorageListName, item.list_name)

      }

      const lineBook = document.createElement('hr')

      // Añadimos al div vacio los elementos HTML creados
      actualListElementContainer.appendChild(elementTitle)
      actualListElementContainer.appendChild(lineBook)
      actualListElementContainer.appendChild(elementDate)
      actualListElementContainer.appendChild(elementDateUpdate)
      actualListElementContainer.appendChild(elementUpdated)
      actualListElementContainer.appendChild(button)
      allBooks.appendChild(actualListElementContainer)

   }

}

fetchAllData()





