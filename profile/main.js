const form = document.getElementById('profileForm');
const clearBtn = document.getElementById('clearBtn');

const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const displayCity = document.getElementById('displayCity');
const displayHobby = document.getElementById('displayHobby');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const city = document.getElementById('city').value.trim();
    const hobby = document.getElementById('hobby').value.trim();

    if (name === '' || age === '' || city === '' || hobby === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    displayName.textContent = name;
    displayAge.textContent = age;
    displayCity.textContent = city;
    displayHobby.textContent = hobby;
});

clearBtn.addEventListener('click', function() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('city').value = '';
    document.getElementById('hobby').value = '';

    displayName.textContent = '';
    displayAge.textContent = '';
    displayCity.textContent = '';
    displayHobby.textContent = '';
});