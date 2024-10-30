// import { burger } from "./burger-menu.js";
import menu from "./menu/kebab-gerichte.js";

    const tagsWrapper = document.querySelector(".tags__wrapper");
    const leftButton = document.querySelector(".arrow__links");
    const rightButton = document.querySelector(".arrow__right");
    const btnTag = document.querySelector(".btn__tags")


    const scrollAmount = btnTag.offsetWidth; // Прокрутка на 200px при каждом нажатии

    leftButton.addEventListener("click", () => {
        tagsWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightButton.addEventListener("click", () => {
        tagsWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });


    let startX = 0;
    let scrollLeft = 0;


    tagsWrapper.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = tagsWrapper.scrollLeft;
    });


    tagsWrapper.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        const deltaX = touch.pageX - startX;
        tagsWrapper.scrollLeft = scrollLeft - deltaX;
    });



// Выбираем контейнер с меню и контейнер для вывода информации о блюдах
const tagsContainer = document.querySelector(".menu__tags-container");
const contentContainer = document.querySelector(".menu__items");

// Функция отображения блюд в нужной структуре
const displayMenu = (category) => {
    contentContainer.innerHTML = ''; // очищаем перед добавлением нового меню

    const dishes = menu[category];

    if (dishes) {
        dishes.forEach(dish => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("item");

            itemElement.innerHTML = `
                <div class="item__first-line">
                    <div class="item__box">
                        <div class="item__number">${dish.id}:</div>
                        <h3 class="item__name">${dish.name}</h3>
                    </div>
                    <div class="item__price-box">
                        <div class="item__price">24cm ${dish.price.toFixed(2).replace(".", ",")}€</div>
                        <div class="item__price">30cm ${dish.price.toFixed(2).replace(".", ",")}€</div>
                        <div class="item__price">40cm ${dish.price.toFixed(2).replace(".", ",")}€</div>
                    </div>

                </div>
                <div class="item__desc">
                    ${dish.ingredients}
                </div>
            `;

            contentContainer.appendChild(itemElement);
        });
    } else {
        contentContainer.innerHTML = '<p>Category not found.</p>';
    }
};

// Обработчик кликов на категории
tagsContainer.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("btn__tags")) {
        document.querySelectorAll(".btn__tags").forEach(tag => {
            tag.classList.remove("tag-selected");
        });


        target.classList.add("tag-selected");
        const category = target.textContent.trim();
        displayMenu(category);
    }
});

displayMenu("Kebab")


export const burger = () => {
    const headerBurger = document.querySelector(".header__burger"); 
    const header = document.querySelector(".header"); 
    const menu = document.querySelector(".nav"); 

    const toggleMenu = () => {
        header.classList.toggle("open");
        document.documentElement.style.overflow = header.classList.contains("open") ? "hidden" : ""; 
    };

    const closeByLink = (e) => {
        if (e.target.closest('.menu__link')) { 
            toggleMenu(); 
        }
    };

    const closeByOverlay = (e) => {
        if (!e.target.closest('.nav') && !e.target.closest('.header__burger')) { 
            if (header.classList.contains("open")) {
                toggleMenu(); 
            }
        }
    };

    headerBurger.addEventListener("click", toggleMenu); 
    document.addEventListener("click", closeByOverlay); 
    menu.addEventListener("click", closeByLink); 
};
burger()









