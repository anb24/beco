document.querySelector('.sidebar__btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.sidebar').classList.toggle('sidebar_active');
    document.querySelector('.wrapper').classList.toggle('wrapper_active');
    document.querySelector('.sidebar__btn').classList.toggle('sidebar__btn_close');
})

