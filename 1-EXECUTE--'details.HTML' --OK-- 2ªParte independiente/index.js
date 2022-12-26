fetch('https://api.nytimes.com/svc/books/v3/lists/current/Science.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO')
.then((response) => response.json())
  .then ((data) => {display(data)})
  .catch (error=>console.log(error))

function display(data) {

    for ( i=0;i<10;i++){
   // Declaro los elementos del libro
    let img= document.createElement("img");
    img.src = `${data.results.books[i].book_image}`;

    let rank = document.createElement("rank");   
    rank.innerHTML=`RANK : ${data.results.books[i].rank}`

    let name = document.createElement("name");   
    name.innerHTML=`${data.results.books[i].title}`

    let author = document.createElement("author");   
    author.innerHTML=`AUTHOR : ${data.results.books[i].author}`

    let publisher = document.createElement("publisher");   
    publisher.innerHTML=`PUBLISHER : ${data.results.books[i].publisher}`

    let amazon = document.createElement('a');
    let link = data.results.books[i].amazon_product_url;
    amazon.setAttribute("href", link);
    amazon.innerHTML = "Buy From Amazon";

    // Añado estos elementos al 'book-card'

    document.getElementById('book-card').appendChild(amazon)
    document.getElementById('book-card').appendChild(publisher)
    document.getElementById('book-card').appendChild(author)
    document.getElementById('book-card').appendChild(name)
    document.getElementById('book-card').appendChild(rank) 
    document.getElementById('book-card').appendChild(img) 

    }

}