const firstElement = document.getElementById('first');
firstElement.innerHTML = '<div id = "second">test</div>';

const secondElement = document.getElementById('second');
secondElement.style.color = 'red';

const thirdElement = document.getElementById('third');
thirdElement.innerHTML = 
`<ul>
<li class = "Li">Hello</li>
<li class = "Li">Hi</li>
<li class = "Li">Buy</li>
</ul`

const LiElements = document.getElementsByClassName('Li');

for (let i = 0; i < LiElements.length; i++) {
    const test = LiElements[i];
    test.style.fontStyle = 'italic';
}

console.log(LiElements)


const bodyElement = document.querySelector('body');
const elementSpan = document.createElement("span");

bodyElement.appendChild(elementSpan);
elementSpan.textContent = 'Hello there';
elementSpan.classList.add('spanClass')

for (let i = 1; i <= 3; i++) {
    const divElement = document.createElement('div');
    divElement.id = `${i}`;
    bodyElement.appendChild(divElement);
}