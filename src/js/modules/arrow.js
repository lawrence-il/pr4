function arrow(classArrow) {

    const arrow = document.querySelector(classArrow);

    document.addEventListener('scroll', () => {
        if (window.pageYOffset >= 1000 && arrow.style.opacity <= 1) { 
            arrow.style.opacity = 1;
            arrow.style.visibility = 'visible';
        } else if (window.pageYOffset < 1000 && arrow.style.opacity >= 0) {
                arrow.style.opacity = 0;
                arrow.style.visibility = 'hidden';
        
        }
        arrow.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
            arrow.style.opacity = 0;
            arrow.style.visibility = 'hidden';
        });
    });

}

export default arrow;