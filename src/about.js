export default function about() {
    document.body.style.background = '';

    const content = document.createElement('div');
    content.setAttribute('id', 'content');


    const weMake = document.createElement('p');
    weMake.textContent = 'We make one thing and make it well.';
    content.appendChild(weMake);

    const ought = document.createElement('p');
    ought.textContent = `We ought to we've been making it longer than we can remember.`;
    content.appendChild(ought);

    const findUs = document.createElement('p');
    findUs.innerHTML = 'Find us at:<br> 1234 Ha-Ha Road, <br> Woolwich, <br> London <br> SE18 4HP';
    content.appendChild(findUs);

    return content;
}