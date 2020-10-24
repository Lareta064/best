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
	const selectElement = document.querySelector('.form-select');
	if (selectElement) {
		const selectInput = selectElement.querySelector('input');
		const selectOptions = selectElement.querySelector('.form-select__options');
		const selectArrow = selectElement.querySelector('.form-select__icon');



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
			if (e.target.tagName == 'LI') {
				selectInput.value = e.target.textContent;
				this.classList.remove('active');
				selectArrow.classList.remove('rotate');
				// console.log(e.target.textContent)
			}

		});
    }
    
    //FORM RANGE INPUT 
    document.querySelector('#amount-val').innerHTML = 10000;
    document.querySelector('#income-val').innerHTML = 50000;

})