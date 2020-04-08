class ShowModal {
    constructor() {
        this.modal = document.querySelector('.modal');
        this.loginBtn = document.querySelector('.nav__login');
        this.signupBtn = document.querySelector('.nav__signup');
        this.signupModal = document.querySelector('.modal__signup');
        this.loginModal = document.querySelector('.modal__login');
        this.closeModal = document.querySelector('.modal__close');
        this.events();
    }
    
    events () {
        this.loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.showLogin();
        });

        this.signupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.showSignup();
        });

        this.closeModal.addEventListener('click', ()=> {
            this.modalClose();
        });
    }

    showLogin() {
        console.log('clicked login')
        this.modal.style.display = 'block';
        this.loginModal.classList.toggle('display');
        
    }

    showSignup(){
        console.log('clicked signup')
        this.modal.style.display = 'block';
        this.loginModal.classList.toggle('display');
    }

    modalClose () {
        this.modal.style.display = 'none';
        // check which modal has the display class and remove
        if(this.loginModal.classList.contains('display')) {
            this.loginModal.classList.remove('display');
        } else {
            this.signupModal.classList.remove('display');
        }
    }
}

export default ShowModal;