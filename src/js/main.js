$(document).ready(function () {
    const person = {
        name: {
            first: 'Peter',
            last: 'Smith',
        },
        age: 27,
        role: 'admin'
    }
    const {
        role = 'user'
    } = person;
    console.log(role);

    //parallax   от Русика
    const paralEl = document.querySelectorAll('.prlx')
    let scrollPos = 0;
    let direction = 0;
    let delta = 0;
    console.log(paralEl);

    window.addEventListener('scroll', function () {
        //get direction
        direction = (document.body.getBoundingClientRect()).top > scrollPos ? 1 : -1;
        delta = (document.body.getBoundingClientRect()).top - scrollPos;
        scrollPos = (document.body.getBoundingClientRect()).top;

        for (let item of paralEl) {
            let val = item.offsetTop;
            val += delta * 0.6;
            item.style.top = val + "px";
        }
    });
})