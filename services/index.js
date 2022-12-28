const spinnerElement = document.getElementById("spinner");
const allBooks = document.getElementById('allListBooks') // Selecciono el elemento del HTML 

async function fetchAllData() {
   const list = await fetchListBooks()
   spinnerElement.setAttribute('class', 'hidden')
   allBooks.removeAttribute('class', 'hidden')
   allBooks.setAttribute('class', 'parentbox')

   for (let i = 0; i < list.length; i++) {

      const item = list[i]
      const actualListElementContainer = document.createElement('div')
      actualListElementContainer.setAttribute("class", "box")

      const elementTitle = document.createElement('h3')
      elementTitle.setAttribute("class", "title")
      elementTitle.innerText = item.list_name

      const elementDate = document.createElement('p')
      elementDate.setAttribute("class", "date")
      elementDate.innerText = ("Oldest:" + ' ' + item.oldest_published_date)


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





