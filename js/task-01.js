// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

// Number of categories: 3

const ulCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategory.length}`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

for (const item of ulCategory) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const valueItem = item.querySelectorAll("li");
    console.log(`Elements: ${valueItem.length}`);
}


