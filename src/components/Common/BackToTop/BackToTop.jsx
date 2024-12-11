import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./style.css"

const BackToTop = () => {
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
    
    return (
    <div className='btt' id='myBtn' onClick={() => topFunction()}>
      <ArrowUpwardIcon style={{color: "var(--blue)"}} />
    </div>
  )
}

export default BackToTop
