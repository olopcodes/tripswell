class Slider {
    constructor() {
        this.trips = document.querySelectorAll('.trips__trip');
        this.prev = document.querySelector('#prev');
        this.next = document.querySelector('#next');
        this.events();
        
    }

    events() {
        this.next.addEventListener('click', (e) => {
            e.preventDefault();
            this.nextSlide();
        })

        this.prev.addEventListener('click', (e) => {
            e.preventDefault();
            this.prevSlide();
        })
    }

    prevSlide() {
        // store the slide with current class
        const current = document.querySelector('.current');
        // remove the current class from the element
        current.classList.remove('current');
        // checking if there is a previous sibling
        if(current.previousElementSibling) {
            current.previousElementSibling.classList.add('current');
        } else {
            // add the current class on the last slide
            this.trips[this.trips.length-1].classList.add('current');
        }
        // removing the current class again after a short time again
        setTimeout(()=> current.classList.remove('current'));
    }

    nextSlide() {
        // store the slide with current class
        const current = document.querySelector('.current');
        // remove the current class from the element
        current.classList.remove('current');
        // checking if there is a previous sibling
        if(current.previousElementSibling) {
            current.previousElementSibling.classList.add('current');
        } else {
            // add the current class on the last slide
            this.trips[this.trips.length-1].classList.add('current');
        }
        // removing the current class again after a short time again
        setTimeout(()=> current.classList.remove('current'));
    }

    
}

export default Slider;