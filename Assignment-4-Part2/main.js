//Name: Teigan Pritchard
//Filename: main.js
//Date: 2025/04/03
//Description: Story name randomizer

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */

const alternativeText = {'pic1.jpg' : 'picture of eye',
    'pic2.jpg' : 'picture of seashell close up',
    'pic3.jpg' : 'picture of purple and white flowers',
    'pic4.jpg' : 'picture of egyption art',
    'pic5.jpg' : 'picture of butterfly on leaf'
  }
/* Looping through images */

for ( image of images) {
    addImage = document.createElement('img');
    addImage.setAttribute('src', `images/${image}`);
    addImage.setAttribute('alt', alternativeText[image]);
    thumbBar.appendChild(addImage);


    addImage.addEventListener('click', clickedImage => {
      displayedImage.src = clickedImage.target.src;
      displayedImage.alt = clickedImage.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {

    currentSelection = btn.getAttribute("class");

    if (currentSelection === "dark") {
      btn.setAttribute("class","light");
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

    } else {
      btn.setAttribute("class","dark");
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
  });
  