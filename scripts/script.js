document.querySelector('footer>span').textContent = `Copyright © ${new Date().getFullYear()} `;

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const library = [
    new Book("Animal Farm", "George Orwell", 128, true),
    new Book("The Time Machine", "H. G. Wells", 118, false),
    new Book("Invisible Man", "H. G. Wells", 128, true),
    new Book("Gulliver's Travels", "Jonathan Swift", 306, false),
    new Book("The Jungle Book", "Rudyard Kipling", 277, false),
    new Book("Frankenstein", "Mary Shelly", 273, false),
]


const addBookToLibraryFromArray = () => {
    document.querySelector('ul').innerHTML = '';
    library.forEach(book =>{
        
        const li = document.createElement('li');
        const header = document.createElement('h1');
        header.textContent = book["title"];
        const author = document.createElement('h2');
        author.textContent = book["author"];
        const pages = document.createElement('input');
        pages.type = 'number';
        pages.value = book['pages'];
        const button = document.createElement('button');
        button.textContent = book["read"] ? 'Read' : 'Not Read';
        const remove = document.createElement('button');
        remove.textContent = 'Remove book'
        button.classList.add(book["read"]?"read":"not-read");

        button.addEventListener('click', ()=>{
            button.classList.toggle('read');
            button.classList.toggle('not-read');
            book["read"] = !book["read"];
            button.textContent = book["read"] ? 'Read' : 'Not Read'
        })
        
        remove.addEventListener('click', ()=>{
            document.querySelector('ul').removeChild(li);
            library.splice(library.indexOf(book),1);
            addBookToLibraryFromArray();
        });
        
        li.appendChild(header);
        li.appendChild(author);
        li.appendChild(pages);
        li.appendChild(button);
        li.appendChild(remove);
        document.querySelector('ul').appendChild(li);
    })
}
const dialog = document.querySelector('dialog');
document.querySelector('main>button').addEventListener('click', ()=>{
    dialog.showModal();
})
document.querySelector('dialog>button').addEventListener('click', ()=>{
    dialog.close();
})
document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault();
    let author = document.querySelector('#author').value
    let title = document.querySelector('#title').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked
    library.push(new Book(title, author, pages, read));
    addBookToLibraryFromArray();
    dialog.close();
})
addBookToLibraryFromArray();