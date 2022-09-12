"use strict"

let ul = document.querySelector('ul');

let container = document.getElementById('albums');
container.addEventListener('click', handleClick);

function handleClick (event) {
    let isRemoveButton = event.target.className === 'del-button';
    if (isRemoveButton){
    let listItem = event.target.closest('.album_title');
    listItem.remove();
}}

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => {for (let album of albums){
        let li = document.createElement('li');
        li.innerHTML = album.title;
        li.classList.add('album_title'); 
        ul.append(li);

        let delButton = document.createElement('button');
        delButton.innerHTML = 'Delete';
        delButton.classList.add('del-button');
        li.append(delButton);
    }})
    .catch(error => console.error(error));
