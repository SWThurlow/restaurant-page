export default function contact(){
    const content = document.createElement('div');
    content.setAttribute('class', 'content');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    content.appendChild(h2);

    const paragraph = document.createElement('p');
    paragraph.classList.add('contentText')
    paragraph.textContent = 'If you would like to contact us to order a delivery we recomend calling us. If you would like to complain about your pizza please e-mail us and we will look into your complaint as soon as we can.';
    content.appendChild(paragraph);

    const contactOptions = document.createElement('p');
    contactOptions.innerHTML = 'Contact us by: <br> Phone - 0123456789 <br> Email - totallyNot@madeUp.pizzaPlace <br> In person - <br> 1234 Ha-Ha Road, <br> Woolwich, <br> London <br> SE18 4HP'
    content.appendChild(contactOptions);

    

    return content;
}