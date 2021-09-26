const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => item.addEventListener('click', () => {
    hideListItems();
    hideContents();

    item.classList.add('active');
    contents[idx].classList.add('show');
}));

function hideListItems() {
    listItems.forEach(item => item.classList.remove('active'));
}

function hideContents() {
    contents.forEach(content => content.classList.remove('show'));
}