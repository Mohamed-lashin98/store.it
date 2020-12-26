const ul_list = document.getElementById('ul_menu');
const nav = document.querySelector('nav');
const all_section = document.querySelectorAll('section');
const list_ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();


var cartnum = document.querySelector('#cartnum');


// for side navbar
ul_list.style.maxHeight = '0px';
function view_menu() {
    if (ul_list.style.maxHeight == '0px') {
        ul_list.style.maxHeight = '200px';
    }

    else {
        ul_list.style.maxHeight = '0px';
    }
}


// for fixed nav bar on scrooling
var sticky = function () {

    nav.classList.toggle('sticky', window.scrollY > 0);
}


document.addEventListener('scroll', sticky);



///////////for active scrooll



all_section.forEach(function (single_section, index) {


    const list = document.createElement('li');

    const link = document.createElement('a');

    let data_nav = single_section.getAttribute('data-nav');

    let data_nav_text = data_nav.textContent;

    let text = document.createTextNode(data_nav);


    link.appendChild(text);

    list.appendChild(link);

    fragment.appendChild(list);


    link.addEventListener('click', function () {

        single_section.scrollIntoView({ behavior: "smooth" });
    });


});
list_ul.appendChild(fragment);

///////////////////////////

