function details({selector, selectorsItem, classActive, selectorBtnsMore, selectorBtnsBack}) {

    const prices = document.querySelector(selector),
        pricesItems = prices.querySelectorAll(selectorsItem),
        btnsMore = prices.querySelectorAll(selectorBtnsMore),
        btnsBack = prices.querySelectorAll(selectorBtnsBack);

    prices.addEventListener('click', (e) => { 
        btnsMore.forEach((btn, index) => {
            if (e.target === btn) { // Если e.target(это ссылка на нажатый объект), это та кнопка, которую, я сейчас перебираю, то возьми её индекс и навесь класс на элемент с таким же индексом 
                pricesItems[index].classList.add(classActive);
            }
        });
        btnsBack.forEach((btn, index) => {
            if (e.target === btn) {
                pricesItems[index].classList.remove(classActive);
            }
        });
    });

}

export default details;