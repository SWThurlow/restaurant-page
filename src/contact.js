export default function contact(){
    const content = document.createElement('div');
    content.setAttribute('class', 'content');

    const paragraph = document.createElement('p');
    paragraph.classList.add('contentText')
    paragraph.textContent = 'If you would like to contact us to order a delivery we recomend calling us. If you would like to complain about your pizza please e-mail us and we will look into your complaint as soon as we can.';
    content.appendChild(paragraph);

    const optionsTitle = document.createElement('h2');
    optionsTitle.textContent = 'Contact Us By:';
    content.appendChild(optionsTitle);

    const contactOptions = document.createElement('p');
    contactOptions.classList.add('contacts');
    contactOptions.innerHTML = 'Phone - 0123456789 <br> Email - totallyNot@madeUp.pizzaPlace <br> In person - <br> 1234 Ha-Ha Road, <br> Woolwich, <br> London <br> SE18 4HP'
    content.appendChild(contactOptions);

    

    return content;
}