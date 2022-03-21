import bizkit1img from './imgs/bizkit1.png'
import bizkit3img from './imgs/bizkit3.png'
import roclobsterimg from './imgs/lobsteregg.png'
import tartimg from './imgs/tart.png'
import bigmacimg from './imgs/bizkit2.png'
import bizplatterimg from './imgs/bizplatter.png'
import briocheimg from './imgs/brioche.png'
import donutsimg from './imgs/donuts.png'




function createMenu() {
    const menuGrid = document.createElement('div')
    menuGrid.classList.add('menuGrid');

    menuGrid.append(
        createMenuItem(
            "Pork Back Baby",
            "It's roughly the size of a baby. Ultra-thick bacon, poached egg, cheddar cheese, and our housemade tomato puree.",
            bizkit1img
        )
    );

    menuGrid.append(
        createMenuItem(
            "Roc Lobster",
            "Made from one giant Roc egg and fresh lobster tail. You'll feel fancy. We promise.",
            roclobsterimg,
        )
    )
    
    menuGrid.append(
        createMenuItem(
            "Tart 4 Four",
            "A giant flaky tart crammed with seasonal fruit. It may be made for four, but we won't judge you if you order it just for yourself.",
            tartimg,
        )
    )

    menuGrid.append(
        createMenuItem(
            "Big Mac Bizkit",
            "Get the ambulence on speedial because this think may put you in a coma. Covered in our big mac gravy, two sausage pattys, and a lot to love.",
            bigmacimg,
        )
    )

    menuGrid.append(
        createMenuItem(
            "Biz Platter",
            "Why mess with a good thing? Here's a big plate of bizkits with our seasonal jams and spreads",
            bizplatterimg,
        )
    )

    menuGrid.append(
        createMenuItem(
            "Full Stop Brioche.",
            "Two massive, light, exemplary brioche donuts. One stuffed with mascarpone, the other with seasonal fruit",
            briocheimg,
        )
    )

    menuGrid.append(
        createMenuItem(
            "The \"healthy\" Bizkit",
            "For the calorie conscious, this one is only 1600 calories for the calories... and we put some arugala on it. ",
            bizkit3img,
        )
    )

    menuGrid.append(
        createMenuItem(
            "Raspberry Go-Nuts",
            "Filled to the rafters with fresh raspberry filling, these fried-on-demand doughnuts will please even the pickiest eater.",
            donutsimg,
        )
    )


    return menuGrid;
}

function createMenuItem(name, description, img) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem')

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    const foodImage = document.createElement('img');
    foodImage.classList.add('menuImg');
    foodImage.src = img;
    foodImage.alt = name;


    menuItem.append(foodImage, foodName, foodDescription);

    return menuItem;
}


function loadMenu() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.append(createMenu())
}

export default loadMenu;