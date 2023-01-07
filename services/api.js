const localStorageKeyBooks = 'books'
const localStorageKeyDetails = 'detailsOfTheBooks'
const localStorageListName = 'presentListName'

const fetchListBooks = async () => {

    let list = JSON.parse(window.localStorage.getItem(localStorageKeyBooks));

    if (!list) {
        try {
            const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')
            const bookLists = await response.json()
            if (bookLists && bookLists.num_results) {
                window.localStorage.setItem(localStorageKeyBooks, JSON.stringify(bookLists.results))
                list = bookLists.results

            }
        } catch (error) {
            console.log(error)
        }
    }

    return list
}

const getBookDetails = async (listName) => {

    const header = document.getElementById('categoryTitle')
    const headerH1 = document.createElement('h3')
    const headertitle = listName
    headerH1.innerText = headertitle
    header.appendChild(headerH1)

    try {

        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB`)
        const bookDetails = await response.json()
        console.log(bookDetails)
        window.localStorage.setItem(localStorageKeyDetails, JSON.stringify(bookDetails.results))
        return bookDetails
    } catch (error) {
        console.log(error)
    }
}