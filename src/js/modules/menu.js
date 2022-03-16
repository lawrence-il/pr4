function menu({selectorMenu, classMenuActive, menuOpen, menuClose}) {

    const menu = document.querySelector(selectorMenu);

    document.querySelector(menuOpen).addEventListener('click', () => {
        if (!menu.querySelector(classMenuActive)) {
            menu.classList.add(classMenuActive.slice(1));
            document.documentElement.style.overflow = "hidden";
        } else {
            menu.classList.remove(classMenuActive.slice(1));
            document.documentElement.style.overflow = "auto";
        }
    });

    document.querySelector(menuClose).addEventListener('click', () => {
        if (menu.querySelector(classMenuActive)) {
            menu.classList.remove(classMenuActive.slice(1));
            document.documentElement.style.overflow = "auto";
        }
    });
}

export default menu;