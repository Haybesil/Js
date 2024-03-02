let body = document.body;

// Body style
//body.style.backgroundColor = 'red'
body.style.display = 'flex'
body.style.flexDirection = 'column'

// Header
// Creating elements for the navbar
let logoImg = document.createElement('img');
let header = document.createElement('header');
let navBar = document.createElement('nav');
let myList = document.createElement('ul');

logoImg.src = '/Images/Javascript logo.jpeg'

// Defining the content for each list item
let itemContents = ['Home', 'About', 'Services', 'Blog'];

for (let i = 0; i < itemContents.length; i++) {
    // Create a new list item
    let listItem = document.createElement('li');

    listItem.textContent = itemContents[i];
    myList.appendChild(listItem);
}
 


// Utilizing the created navbar elements
document.body.append(header);
header.append(navBar);
navBar.append(logoImg);
navBar.append(myList);



// Styling
header.style.paddingTop = '30px'
header.style.backgroundColor = '#0da34c';

// Image height and width
logoImg.style.height = '30px'


// Styling the Navbar

navBar.style.display = 'flex';
navBar.style.justifyContent = 'space-between';
navBar.style.marginInline = '10vw'


// Styling the Ul
myList.style.color = '#fff'
myList.style.display = 'flex'
myList.style.gap = '30px'
myList.style.listStyle = 'none'



// Main
// Creating the main elements
let main = document.createElement('main');
let h1 = document.createElement('h1');

h1.textContent = 'Welcome to Javascript'

// Utilizing the main elements
document.body.append(main);
main.append(h1);


// Styling the main
main.style.backgroundColor = '#26d870';


// Styling the main h1
h1.style.textAlign = 'center'
h1.style.fontSize = '45px'
h1.style.marginInline = '35vw';
h1.style.paddingTop = '10px';
h1.style.color = '#fff'






//  Creating the section elements
let section = document.createElement('section');
let image = document.createElement('img');
image.src = '/Images/Javascript logo.jpeg'
let firstList = document.createElement('ul');
let secondList = document.createElement('ul');
let thirdList = document.createElement('ul');

let firstItemContents = ['About', 'Home', 'Services'];
let secondItemContents = ['Company', 'Limit', 'Stages'];
let thirdItemContents = ['Links', 'Js', 'Courses'];

for (let i = 0; i < firstItemContents.length; i++) {
    // Create a new list item
    let firstListItem = document.createElement('li');
    let secondListItem = document.createElement('li');
    let thirdListItem = document.createElement('li');

    firstListItem.textContent = firstItemContents[i];
    secondListItem.textContent = secondItemContents[i];
    thirdListItem.textContent = thirdItemContents[i];


    firstList.append(firstListItem);
    secondList.append(secondListItem);
    thirdList.append(thirdListItem);
}

document.body.append(section);
section.append(image);
section.append(firstList);
section.append(secondList);
section.append(thirdList);






// Styling the section

section.style.display = 'flex';
section.style.justifyContent = 'space-between';
section.style.paddingInline = '10vw';
section.style.paddingTop = '10px';
section.style.backgroundColor = '#68e49b'
section.style.alignItems = 'center';    
section.style.height = '35vh';
section.style.color = '#fff'

// Styling the image
image.style.height = '40px';
image.style.marginTop = '5vh';


// Styling the the uls
firstList.style.listStyle = 'none';
firstList.style.display = 'flex';
firstList.style.flexDirection = 'column';
firstList.style.gap = '10px';



secondList.style.listStyle = 'none';
secondList.style.display = 'flex';
secondList.style.flexDirection = 'column';
secondList.style.gap = '10px';
secondList.style.color = '#fff'

thirdList.style.listStyle = 'none';
thirdList.style.display = 'flex';
thirdList.style.flexDirection = 'column';
thirdList.style.gap = '10px';


// Footer content
let footer = document.createElement('footer');
let myFooterList = document.createElement('ul');

let footerContents = ['\u00A9 Copywrite', 'JavaScript Class'];

for (let i = 0; i < footerContents.length; i++) {
    // Create a new list item
    let footerListItem = document.createElement('li');

    footerListItem.textContent = footerContents[i];
    myFooterList.appendChild(footerListItem);
}

document.body.append(footer);
footer.append(myFooterList);


// Styling the footer
footer.style.height = '15vh';
footer.style.backgroundColor = '#74e9a5';
footer.style.color = '#fff'

// Styling the footer ul
myFooterList.style.display = 'flex';
myFooterList.style.gap = '50px';
myFooterList.style.paddingTop = '10px';
myFooterList.style.listStyle = 'none';
myFooterList.style.paddingInline = '29vw';











