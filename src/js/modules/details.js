function details({selector, selectorsItem, classActive, selectorBtnsMore, selectorBtnsBack}) {

    const prices = document.querySelector(selector),
        pricesItems = prices.querySelectorAll(selectorsItem),
        btnsMore = prices.querySelectorAll(selectorBtnsMore),
        btnsBack = prices.querySelectorAll(selectorBtnsBack);

    prices.addEventListener('click', (e) => {
        btnsMore.forEach((btn, index) => {
            if (e.target === btn) {
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