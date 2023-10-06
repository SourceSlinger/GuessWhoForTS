var commonProblems = [
    'Data issue related to specific employee',
    'Data issue related to specific site',
    'Data issue caused by bad conversion data',
    'Automation setup issue',
    'Bug caused by bad code',
    'Bug caused by bad specification',
    'User misunderstanding how the software works',
    'Site is being accessed during an update or server restart',
    'Display issue on specific screen sizes',
    'Timeout due to large amounts of data',
    'Not even a bug/issue, just a straight up enhancement request',
    'User is using old version that doesn\'t contain the fix',
    'Site doesn\'t have the right license file options enabled',
    'Timezone or time of day related bug'];

var cards = document.querySelector('.cards');

commonProblems.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `${img}`;
    person.classList.add('card');
    cards.appendChild(person);
});

var people = document.querySelectorAll('.card');

document.querySelectorAll('.card').forEach((element) => {
    element.onmouseenter = function () {
        element.classList.add('hover');
    }
    element.onmouseleave = function () {
        element.classList.remove('hover')
    }
    element.onclick = function () {
        element.style.transition = 'visibility 0s 0.7s, opacity 0.7s linear';
        element.style.opacity = 0;
        element.style.visibility = 'hidden';
    }
})