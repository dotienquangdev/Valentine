//1
const $ = document.querySelector.bind(document);
//2
const $$ = document.querySelectorAll.bind(document);

//3
const tabs = $$('.tab-item');
//4
const panes = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.tabs .line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

//5
tabs.forEach((tab, index) => {
    const pane = panes[index];

    //5.1
    tab.onclick = function () {

        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
    };
});