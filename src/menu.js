export default function menu() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';
    content.appendChild(h2);

    const menu = document.createElement('section');
    menu.classList.add('menu');
    content.appendChild(menu);

    const pizzas = [{
        title: 'Margherita',
        topping: 'Mozzarella | Basil | Tomato Sauce',
        description: 'Classic simple pizza that still tastes good.'
    }, {
        title: 'Carbonara',
        topping: ' Cream Sauce | Mozzarella | Lardons | Eggs',
        description: "Probably not a great idea to get this one to take away."
    }, {
        title: 'Hawaiian ',
        topping: 'Mozzarella | Tomato Sauce | Ham | Pineapple',
        description: "We're not here to debate pineapple on pizza we just cook what people order."
    }, {
        title: 'Quattro Formaggi',
        topping: 'Groviera | Pecorino Romano | Gorgonzola | Fontina | Tomato Sauce',
        description: "Lots of melted cheese. What's not to like."
    }, {
        title: 'Quattro Stagioni',
        topping: 'Mozzarella | Artichoke Hearts | Olives | Mushrooms | Tomato Sauce',
        description: "The perfect pizza for when you are feeling indecisive."
    }, {
        title: 'Vegtable',
        topping: 'Mozzarella | Artichoke Hearts | Rocket | Mushrooms | Pepper | Onion | Tomato Sauce',
        description: "If you want a veggie option that isn't just cheese."
    }];

    pizzas.forEach(pizza => {
        const container = document.createElement('div');
        container.classList.add('menuItem')

        const title = document.createElement('h3');
        title.textContent = pizza.title;
        container.appendChild(title);

        const ingredients = document.createElement('p');
        ingredients.textContent =  pizza.topping;
        container.appendChild(ingredients);

        const description = document.createElement('p');
        description.textContent = pizza.description;
        container.appendChild(description);

        menu.appendChild(container);
    });


    return content;
}