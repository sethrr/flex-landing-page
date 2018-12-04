let buttons = document.querySelectorAll('[data-btn]');
let image = document.getElementById('section-4-image');

buttons.forEach((buttons) => {
    buttons.addEventListener("click", function () {
            document.querySelector('.item.active').classList.remove('active');
            this.classList.toggle('active');

            if (this.dataset.btn === 'firewood') {
                image.setAttribute("src", "./images/tab2.jpg")
            }
            else {
                image.setAttribute("src", "./images/tab1.jpg")
            }
        }
    )
});
