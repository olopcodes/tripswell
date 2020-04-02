class ShowModal {
    constructor() {
        this.btns = document.querySelectorAll('.nav__sign a');
        this.modal = document.querySelector('.modal');
        this.signup = document.querySelector('.modal__signup');
        this.login = document.querySelector('.modal__login');
        this.closeModal = document.querySelector('.modal__close');
        this.events();
    }

    events () {
        this.btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.display(btn);
            })
        })

        this.closeModal.addEventListener('click', ()=> {
            this.modalClose();
        });
    }

    display(btn) {
        console.log('clicked')
        const value = btn.innerText;
        this.modal.style.display = 'block';

        if (value.toLowerCase() === 'login') {
            // this.login.style.transform = 'scale(1)';
            // this.signup.style.display = 'none';
            this.login.classList.toggle('display');
            this.signup.classList.remove('display');
        } else {
            // this.signup.style.transform = 'scale(1)';
            // this.login.style.display = 'none';
            this.signup.classList.toggle('display');
            this.login.classList.remove('display');
        }

    }

    modalClose () {
        this.modal.style.display = 'none';
    }
}

export default ShowModal;