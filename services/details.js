const spinnerElement = document.getElementById("spinner");
const bookDetailsInfo = document.getElementById('bookBestSeller') // Selecciono el elemento del HTML 


async function callBookDetails() {

    const selectedListName = localStorage.getItem(localStorageListName)
    const bookDetails = await getBookDetails(selectedListName)

    spinnerElement.setAttribute('class', 'hidden')
    bookDetailsInfo.removeAttribute('class', 'hidden')
    bookDetailsInfo.setAttribute('class', 'parentbox')

    const listNameBook = document.createElement('h4')
    listNameBook.setAttribute("id", "listBookName")
    listNameBook.innerText = selectedListName

    for (const book of bookDetails.results.books) {

        const actualDetailBook = bookDetailsInfo.appendChild(document.createElement('div'))
        actualDetailBook.setAttribute("class", "box")


        const titleBooks = book.title
        const allTitleBook = document.createElement('h4')
        allTitleBook.setAttribute("class", "titleBook")
        allTitleBook.innerText = titleBooks

        const imgBook = book.book_image
        const showImg = document.createElement('img')
        showImg.setAttribute("src", imgBook)
        showImg.setAttribute("class", "imgBooks")

        const weekList = book.weeks_on_list
        const elementWeekList = document.createElement('p')
        elementWeekList.setAttribute("class", "title")
        elementWeekList.innerText = "Week on list: " + weekList

        const descriptionBook = book.description
        const elementDescription = document.createElement('p')
        elementDescription.setAttribute("class", "text")
        elementDescription.innerText = descriptionBook

        const amazonButton = document.createElement('a')
        amazonButton.setAttribute("class", "buyButton")
        amazonButton.setAttribute("href", book.amazon_product_url)
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










