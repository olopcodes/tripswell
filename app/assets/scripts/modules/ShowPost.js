class ShowPost {
    constructor() {
        this.readAllBtns = document.querySelectorAll('.blog-main-btn');
        this.events();
    }

    events() {
        this.readAllBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // console.log(btn.previousElementSibling)
                this.displayPost(btn);
            })
        })
    }

    displayPost(btn) {
        const postText = btn.previousElementSibling;
        postText.classList.toggle('show');

    }

    
    

    
}

export default ShowPost;