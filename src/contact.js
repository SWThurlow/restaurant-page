export default function contact(){
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    content.appendChild(h2);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'If you would like to contact us to order a delivery we recomend calling us. If you would like to complain about your pizza please e-mail us and we will look into your complaint as soon as we can.';
    content.appendChild(paragraph);

    const contactOptions = document.createElement('ul');
    contactOptions.classList.add('contacts');
    content.appendChild(contactOptions);

    

    return content;
}