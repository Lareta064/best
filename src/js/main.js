$(document).ready(function () {
    // show more offer cards
    let hideOfferCards = document.querySelectorAll('.hide-card');
    const btnShowOfferCards = document.querySelector('#show-cards');
    const bodyEl = document.body;
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
    const mobMenu = document.querySelector('#mobile-menu');
    const btnCloseMobMenu  = document.querySelector('#close-btn')
    menuToggle.addEventListener('click', function () {
        mobMenu.classList.add('active');
        bodyEl.classList.add('noscroll');
        
    });

    // close-mobile menu
    if(btnCloseMobMenu){
       btnCloseMobMenu.addEventListener('click', function(){
            mobMenu.classList.remove('active');
            bodyEl.classList.remove('noscroll');
        });
    }
    
    // CUSTOM FORM SELECT
	const selectElement = document.querySelectorAll('.form-select');
	if (selectElement) {
        for(let item of  selectElement){
            const selectInput = item.querySelector('input');
            const selectOptions = item.querySelector('.form-select__options');
            const selectArrow = item.querySelector('.form-select__icon');

            selectInput.addEventListener('click', function () {

                if (selectOptions.classList.contains('active')) {
                    selectArrow.classList.remove('rotate');
                    selectOptions.classList.remove('active');
                } else {
                    selectArrow.classList.add('rotate');
                    selectOptions.classList.add('active');
                }

            });

            selectArrow.addEventListener('click', function () {

                if (selectOptions.classList.contains('active')) {
                    this.classList.remove('rotate');
                    selectOptions.classList.remove('active');
                } else {
                    this.classList.add('rotate');
                    selectOptions.classList.add('active');
                }

            });

            //click on select dropdown
            selectOptions.addEventListener('click', function (e) {
                const itemsArr = this.querySelectorAll('li');
                for(item of itemsArr){
                    item.classList.remove('active');
                }
                if (e.target.tagName == 'LI') {
                    selectInput.value = e.target.textContent;
                    this.classList.remove('active');
                    e.target.classList.add('active');
                    selectArrow.classList.remove('rotate');                    
                }
            });
        }
        }
		
    
    //FORM RANGE INPUT 
    document.querySelector('#amount-val').innerHTML = 10000;
    document.querySelector('#income-val').innerHTML = 50000;

    //custom scroll for mobile menu
    document.querySelector('.scroll-outside').fakeScroll();
    
    //footer-accordion
    $('.accordion-card__body').hide();
    $('.accordion-card__head').on('click', function(){
        $('.accordion-card__head p').toggleClass("active");
        $('.accordion-card__body').toggle(500);
        $('.accordion-card__icon').toggleClass("rotate");
    });
    

})