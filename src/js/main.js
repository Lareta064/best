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

})