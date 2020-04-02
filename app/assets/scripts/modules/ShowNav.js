class ShowNav {
    constructor () {
        this.hamburgerBtn = document.querySelector('.nav__hamburger');
        this.nav = document.querySelector('.nav');
        this.events();
    }

    events() {
        this.hamburgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.display();
        });
    }

    display() {
        console.log('hamburger clicked');
        this.nav.classList.toggle('show');
    }
}

export default ShowNav;