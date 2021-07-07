/*Scripts for links*/
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

/*Nav*/
export default function navigation() {
  const header = document.createElement('header');

  const h1 = document.createElement('h1');
  h1.textContent = 'The Pizza Place';
  header.appendChild(h1);

  const nav = document.createElement('nav');
  
  const navList = document.createElement('ul')
  nav.appendChild(navList);

  const homeLink = document.createElement('li');
  homeLink.textContent = 'Home';
  homeLink.classList.add('current');
  homeLink.addEventListener('click', () => {
    let content = document.querySelector('.content');
    document.body.removeChild(content);
    document.body.appendChild(home());
  });
  navList.appendChild(homeLink);

  const menuLink = document.createElement('li');
  menuLink.textContent = 'Menu';
  menuLink.addEventListener('click', () => {
    let content = document.querySelector('.content');
    document.body.removeChild(content);
    document.body.appendChild(menu());
  });
  navList.appendChild(menuLink);

  const contactLink = document.createElement('li');
  contactLink.textContent = 'Contact';
  contactLink.addEventListener('click', () => {
    let content = document.querySelector('.content');    
    document.body.removeChild(content);
    document.body.appendChild(contact());
  });
  navList.appendChild(contactLink);

  nav.appendChild(navList);
  header.appendChild(nav)

  return header;
} 