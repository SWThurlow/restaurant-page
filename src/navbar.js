/*Scripts for links*/
import about from './about.js';
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
  
  const aboutLink = document.createElement('li');
  aboutLink.textContent = 'About Us';
  aboutLink.addEventListener('click', () => {
    let content = document.getElementById('content');
    document.body.removeChild(content);

    document.body.appendChild(about());
  });
  navList.appendChild(aboutLink);

  const menuLink = document.createElement('li');
  menuLink.textContent = 'Our Menu';
  menuLink.addEventListener('click', () => {
    let content = document.getElementById('content');
    document.body.removeChild(content);

    document.body.appendChild(menu());
  });
  navList.appendChild(menuLink);

  const contactLink = document.createElement('li');
  contactLink.textContent = 'Contact Us';
  contactLink.addEventListener('click', () => {
    let content = document.getElementById('content');
    document.body.removeChild(content);

    document.body.appendChild(contact());
  });
  navList.appendChild(contactLink);

  nav.appendChild(navList);
  header.appendChild(nav)

  return header;
} 