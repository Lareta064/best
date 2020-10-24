$(document).ready(function () {
    // show more offer cards
    let hideOfferCards = document.querySelectorAll('.hide-card');
    const btnShowOfferCards = document.querySelector('#show-cards');
    btnShowOfferCards.addEventListener('click', function(){
        for(item of hideOfferCards){
            item.classList.add('active');
            this.classList.add('hide');
        }
    })
})