// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker() {
  // creation of elements
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  const liThree = document.createElement("li");
  const liFour = document.createElement("li");
  const liFive = document.createElement("li");
  const liSix = document.createElement("li");

  //giving elements classes
  menu.className = "menu";

  // giving elements content
  liOne.textContent = menuItems[0];
  liTwo.textContent = menuItems[1];
  liThree.textContent = menuItems[2];
  liFour.textContent = menuItems[3];
  liFive.textContent = menuItems[4];
  liSix.textContent = menuItems[5];

  // appending elements together
  menu.appendChild(list);
  list.appendChild(liOne);
  list.appendChild(liTwo);
  list.appendChild(liThree);
  list.appendChild(liFour);
  list.appendChild(liFive);
  list.appendChild(liSix);

  // menu button
  const button = document.querySelector(".menu-button")

  // event listener
  button.addEventListener("click", event => {
    menu.classList.toggle("menu--open")
  })

  return menu
}

// This is the menu component
const menu = menuMaker()

// This is the insertion point
const enter = document.querySelector(".header")

// We're appending the menu to div.header
enter.appendChild(menu)
