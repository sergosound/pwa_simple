// console.log('weqwe')
document.addEventListener('DOMContentLoaded', async () => {
    const data = await getUsers();
    renderUsers(data);
});

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
}

function renderUsers(users) {
    const wrapper = document.createElement('ul');
    wrapper.classList.add('list-group');
    let li;

    users.forEach(user => {
        li = document.createElement('li');
        li.classList.add('list-group-item')
        li.innerText = user.name;
        wrapper.appendChild(li);
    });

    document.body.appendChild(wrapper);
}