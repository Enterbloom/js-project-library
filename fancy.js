let myLibrary = []
function Book(author, title, pages, status) {
  this.author = author
  this.title = title
  this.pages = pages
  this.status = status
}

let i = 0

function addBookToLibrary() {
  let Author = document.getElementById("Author").value
  let Title = document.getElementById("Title").value
  let Pages = document.getElementById("Pages").value
  let Status = document.getElementById("Status").value
  let newBook = new Book(Author, Title, Pages, Status)

  myLibrary.push(newBook)
  document.getElementById("formContainer").style.display = 'none'

  let book = document.createElement('div')

  let author = document.createElement('h1') 
  let title = document.createElement('h4')
  let pages = document.createElement('h4')
  let status = document.createElement('h4')

  let btnRemove = document.createElement("button")
  let btnStatus = document.createElement("button")

  author.innerHTML = myLibrary[i].author
  title.innerHTML = myLibrary[i].title
  pages.innerHTML = myLibrary[i].pages
  status.innerHTML = myLibrary[i].status
  btnRemove.innerHTML = "Remove"
  btnStatus.innerHTML = "Change reading status"
  book.dataset.num = i
  ++i
  document.getElementById("bookList").appendChild(book).appendChild(author)
  document.getElementById("bookList").appendChild(book).appendChild(title)
  document.getElementById("bookList").appendChild(book).appendChild(pages)
  document.getElementById("bookList").appendChild(book).appendChild(status)
  document.getElementById("bookList").appendChild(book).appendChild(btnRemove)
  document.getElementById("bookList").appendChild(book).appendChild(btnStatus)

  btnRemove.addEventListener ("click", function(e) {
    console.log(e.target.parentElement.dataset.num)
    e.target.parentElement.remove()
    let index = myLibrary.indexOf(e.target.parentElement.dataset.num)
    myLibrary.splice(index, 1)
    --i
  });

  btnStatus.addEventListener ("click", function(e) {
    let index = myLibrary.indexOf(e.target.parentElement.dataset.num)
    myLibrary.splice(index, 1)
    --i
  });
}

function showForm () {
  formContainer = document.getElementById("formContainer")
  formContainer.style.display = "flex"
}

function closeForm() {
  document.getElementById("formContainer").style.display = 'none'
}