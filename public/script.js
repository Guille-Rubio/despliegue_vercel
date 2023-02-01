const petName = document.getElementById('name').value;
const animal = document.getElementById('animal').value;
const owner = document.getElementById('owner').value;
const imageUrl = document.getElementById('imageUrl').value;
const saveButton = document.getElementById('saveButton');

const baseUrl = "http://localhost:3000";

saveButton.addEventListener('click', async () => {
    await fetch(`${baseUrl}/pets`,{
        method:'POST',
        body:{petName,animal,}
    })

})