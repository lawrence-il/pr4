function arrow(classArrow) {

    const arrow = document.querySelector(classArrow);
    let opacity = 0;

    document.addEventListener('scroll', () => {
        if (window.pageYOffset >= 1000 && opacity < 1) { 
            
            arrow.style.display = 'flex';
            let show = setInterval(function () {
                arrow.style.opacity = opacity;
                opacity += 0.01;
                if (opacity >= 1) {
                    clearInterval(show);
                }
            }, 80);

        } else if (window.pageYOffset < 1000 && opacity > 0) {
            let hide = setInterval(function afc() {
                arrow.style.opacity = opacity;
                opacity -= 0.01;
                if (opacity < 0) {
                    clearInterval(hide);
                    arrow.style.display = 'none';
                }
            }, 80);
        }
        arrow.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
        });
    });

}

export default arrow;