const spinnerElement = document.getElementById("spinner");
const bookDetailsInfo = document.getElementById('bookBestSeller') // Selecciono el elemento del HTML 


async function callBookDetails() {

    const selectedListName = localStorage.getItem(localStorageListName)
    const bookDetails = await getBookDetails(selectedListName)

    spinnerElement.setAttribute('class', 'hidden')
    bookDetailsInfo.removeAttribute('class', 'hidden')
    bookDetailsInfo.setAttribute('class', 'padre')

    const listNameBook = document.createElement('h4')
    listNameBook.setAttribute("id", "listBookName")
    listNameBook.innerText = selectedListName

    for (const book of bookDetails.results.books) {

        const actualDetailBook = bookDetailsInfo.appendChild(document.createElement('div'))
        actualDetailBook.setAttribute("id", "allBooks")
        actualDetailBook.setAttribute("class", "caja")


        const titleBooks = book.title
        const allTitleBook = document.createElement('h4')
        allTitleBook.setAttribute("id", "titleBook")
        allTitleBook.innerText = titleBooks

        const imgBook = book.book_image
        const showImg = document.createElement('img')
        showImg.setAttribute("src", imgBook)
        showImg.setAttribute("id", "imgBooks")

        const weekList = book.weeks_on_list
        const elementWeekList = document.createElement('p')
        elementWeekList.setAttribute("id", "weekList")
        elementWeekList.setAttribute("class", "titulo")
        elementWeekList.innerText = "Week on list: " + weekList

        const descriptionBook = book.description
        const elementDescription = document.createElement('p')
        elementDescription.setAttribute("id", "descriptionBook")
        elementDescription.setAttribute("class", "texto")
        elementDescription.innerText = descriptionBook

        const amazonButton = document.createElement('button')
        amazonButton.setAttribute("class", "buyButton")
        const buttonAmazonText = "BUY AT AMAZON"
        const amazonIcon = document.createElement('i')
        amazonIcon.setAttribute("class", "fa-regular fa-circle-play")
        amazonButton.innerHTML = buttonAmazonText
        amazonButton.appendChild(amazonIcon)

        actualDetailBook.appendChild(allTitleBook)
        actualDetailBook.appendChild(showImg)
        actualDetailBook.appendChild(elementWeekList)
        actualDetailBook.appendChild(elementDescription)
        actualDetailBook.appendChild(amazonButton)



    }


}

callBookDetails()









