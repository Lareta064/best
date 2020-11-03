$(document).ready(function () {
    //pageReview floating button
    const headerFloatingBtn = document.querySelector('#float-btn');
    const headerFloating = document.querySelector('.header-floating');
    if (headerFloatingBtn) {
        window.addEventListener('scroll', function () {
            if (this.pageYOffset > 10) {
                headerFloatingBtn.classList.add('active');
                headerFloating.classList.add('fix');
            } else {
                headerFloatingBtn.classList.remove('active');
                headerFloating.classList.remove('fix');
            }
        });
    }

    // click for show more offer cards
    let hideOfferCards = document.querySelectorAll('.hide-card');
    const btnShowOfferCards = document.querySelector('#show-cards');
    const bodyEl = document.body;
    const overlayEl = document.querySelector('#overlay');
    if (btnShowOfferCards) {
        btnShowOfferCards.addEventListener('click', function () {
            for (item of hideOfferCards) {
                item.classList.add('active');
                this.classList.add('hide');
            }
        });
    }
    //click on toggle-menu Header
    const menuToggle = document.querySelector('.menu-toggle');
    const mobMenu = document.querySelector('#mobile-menu');
    const btnCloseMobMenu = document.querySelector('#close-btn')
    if (menuToggle) {

        menuToggle.addEventListener('click', function () {
            mobMenu.classList.add('active');
            bodyEl.classList.add('noscroll');
            overlayEl.classList.add('active');

        });
        mobMenu.addEventListener('click', function(){
           this.classList.remove('active');
            bodyEl.classList.remove('noscroll');
            overlayEl.classList.remove('active');
        });
        window.addEventListener('resize', function(){
            mobMenu.classList.remove('active');
            bodyEl.classList.remove('noscroll');
            overlayEl.classList.remove('active');
        });
    }
    // CUSTOM FORM SELECT
    const selectElement = document.querySelectorAll('.form-select');
    if (selectElement) {
        for (let item of selectElement) {
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
                for (item of itemsArr) {
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
    if (document.querySelector('#amount-val') || document.querySelector('#income-val')) {
        document.querySelector('#amount-val').innerHTML = 10000;
        document.querySelector('#income-val').innerHTML = 50000;
        const rangeLine1 = document.getElementById('range-line1');
        const rangeLine2 = document.getElementById('range-line2');
        let range1 = document.getElementById('range-1');
        let range2 = document.getElementById('range-2');

        function colorLineForRangeInput(rangeInput, lineItem) {
            let maxVal = +rangeInput.getAttribute('max');
            let currentVal = rangeInput.getAttribute('value');
            let thisValue = +rangeInput.value;
            let lineWidth = +(thisValue * 100 / maxVal) + '%';
            lineItem.setAttribute("style", `width:${lineWidth}`);
            rangeInput.addEventListener('input', function () {
                // let maxVal = +this.getAttribute('max');
                // let currentVal = this.getAttribute('value');
                let thisValue = +this.value;
                let lineWidth = +(thisValue * 100 / maxVal) + '%';
                lineItem.setAttribute("style", `width:${lineWidth}`);

            });
        }

        colorLineForRangeInput(range1, rangeLine1);
        colorLineForRangeInput(range2, rangeLine2);
    }


    //custom scroll for mobile menu
    if (document.querySelector('.scroll-outside')) {
        document.querySelector('.scroll-outside').fakeScroll();
    }


    //footer-accordion
    $('.accordion-card__body').hide();
    $('.accordion-card__head').on('click', function () {
        $('.accordion-card__head p').toggleClass("active");
        $('.accordion-card__body').toggle(500);
        $('.accordion-card__icon').toggleClass("rotate");
    });
    //modal form input
    const modalFormInputs = document.querySelectorAll('.modal-form input');
    const modalFormTextarea = document.querySelector('.modal-form textarea');
    if (modalFormInputs) {
        for (item of modalFormInputs) {
            item.addEventListener('blur', function () {
                if (this.value !== '') {
                    this.classList.add('valid');
                } else {
                    this.classList.remove('valid');
                }
            });
        }
    }
    if (modalFormTextarea) {
        modalFormTextarea.addEventListener('blur', function () {
            if (this.value !== '') {
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
            }
        });
    }


    //accordion
    $('.collapse').each(function () {
        $(this).on('show.bs.collapse', function () {
            $(this).siblings('.card-header').children('.accordion-icon').addClass('active');
        });
        $(this).on('hide.bs.collapse', function () {
            $(this).siblings('.card-header').children('.accordion-icon').removeClass('active');
        })
    });

    //replacing the modalForm title when clicking on contact-card 
    let contactCards = document.querySelectorAll('.contact-card');
    let modalTitle = document.querySelector('#modal-title');

    if (contactCards) {
        for (let item of contactCards) {
            const itemTitle = item.querySelector('h4').textContent;
            item.addEventListener('click', function () {
                modalTitle.innerHTML = itemTitle;
            });
        }
    }
})