import '../styles/styles.css';
import 'lazysizes';
import ShowPost from './modules/ShowPost';
import ShowNav from './modules/ShowNav';
import ShowModal from './modules/ShowModal';
import Slider from './modules/Slider';
// import ClientArea from './modules/ClientArea';

// React related code
// import React from 'react';
// import ReactDOM from 'react-dom';

// import created react components
// import MyAmazingComponent from './modules/MyAmazingComponent'

// ReactDOM.render(<MyAmazingComponent />, document.querySelector('#react-example'))



// this cause issues for me because it was not on the slider 
// was not on the page
// this will check if en element will current is on the page
// w/o this it will cause problems


// classes for all pages
new ShowNav();
new ShowModal();

// page specific classes
if(document.querySelector('.blog-hero')) {
    new ShowPost();
}

if (document.querySelector('.current')){
    new Slider();
}
 




