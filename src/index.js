/*Imports.*/
import _ from 'lodash';
//CSS.
import './style.css'
//Images.
import menuImg from './imgs/menu.jpg';
//Javascript.
import navigation from './navbar.js';
import about from './about.js'
import contact from './contact.js'

document.body.appendChild(navigation());

document.body.appendChild(contact());