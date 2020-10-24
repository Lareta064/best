$(document).ready(function () {
    // show more offer cards
    let hideOfferCards = document.querySelectorAll('.hide-card');
    const btnShowOfferCards = document.querySelector('#show-cards');
    if(btnShowOfferCards){
        btnShowOfferCards.addEventListener('click', function(){
            for(item of hideOfferCards){
                item.classList.add('active');
                this.classList.add('hide');
            }
        });
    }
    //click on toggle-menu
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function () {
        if (this.classList.contains('active')) {

            this.classList.remove('active');
            // mobMenu.classList.remove('active');

            // overlayBlock.classList.remove('active');
            // bodyEl.classList.remove('noscroll');

        } else {
            this.classList.add('active');
            // mobMenu.classList.add('active');
            // overlayBlock.classList.add('active');
            // bodyEl.classList.add('noscroll');

        }
    });
})