const bookShelves = document.querySelector('#bookShelves');
const addBook = document.querySelector('#addBook');
const bookShelveInd = document.querySelector('.bookShelve');
let removeB = document.querySelectorAll('#remove');

let number = 1;

function removeBook(e) {
    let removedItem = document.getElementById(e.target.parentElement.parentElement.id);
    bookShelves.removeChild(removedItem);
}

function updateRemoveB() {
    removeB = document.querySelectorAll('#remove');
    return removeB
}

function giveEvent(array = removeB) {
    array = updateRemoveB();
    array.forEach(i => i.addEventListener('click', removeBook));
}

addBook.addEventListener('click', (e) => {
    let copyOfBookShelve = bookShelveInd.cloneNode(true);
    copyOfBookShelve.setAttribute('id', `${number}`);
    bookShelves.appendChild(copyOfBookShelve);
    number++;
    updateRemoveB();
    giveEvent();
});