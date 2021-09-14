const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-close')

// Ham hien thi chuc nang mua ve
function showBuyTicket() {
    modal.classList.add('open')
}

// Ham dong chuc nang mua ve
function hideBuyTicket() {
    modal.classList.remove('open')
}

// Bat su kien click vao button mua ve
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}

// Bat su kien dong cua so modal
modalClose.addEventListener('click', hideBuyTicket)

modal.addEventListener('click', hideBuyTicket)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var currentHeaderHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === currentHeaderHeight;
    if(isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}