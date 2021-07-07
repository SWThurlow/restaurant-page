export default function home() {
    document.body.style.background = '';

    const content = document.createElement('div');
    content.setAttribute('class', 'content');


    const weMake = document.createElement('p');
    weMake.textContent = 'We make one thing and make it well.';
    weMake.classList.add('homeText');
    content.appendChild(weMake);

    const ought = document.createElement('p');
    ought.classList.add('homeText')
    ought.textContent = `We ought to we've been making it for almost a hundred years.`;
    content.appendChild(ought);

    const img = new Image();
    img.classList.add('homeImg')
    img.src = './imgs/home.jpg';
    content.appendChild(img);

    const delivery = document.createElement('p');
    delivery.classList.add('homeText')
    delivery.textContent = `Call us with your order or feel free to visit.`;
    content.appendChild(delivery);
    
    return content;
}