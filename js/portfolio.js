(() => {

    //console.log('fired');

    const menu            =  document.querySelector('.menuCon'),
          navLightbox     =  document.querySelector('.navLightbox'),
          navLink         =  document.querySelectorAll('.navLink');
        
    
    // Navigation Lightbox

    function openNav(){
        let navLink = document.querySelectorAll('.navLink'),
            closeNav = document.querySelector('.navClose');
        
        navLightbox.classList.add('navLightboxOn');
        
        

        let tl = new TimelineMax();

         tl.from(navLightbox, 0.6, { opacity: 0}, { opacity: 1,  ease: Power0.easeNone})
          .staggerFrom(navLink, 1, {opacity:0, ease: Power1.easeIn}, 0.2)
          .from(closeNav, 0.1, {opacity: 0, ease: Power1.easeIn });  
    }


    function closeNav(e){
        navLightbox.classList.remove('navLightboxOn');
    }
    
    
    menu.addEventListener('click', openNav);
    navLink.forEach(link => link.addEventListener('click', scrollTo));
    navLightbox.querySelector('.navClose').addEventListener('click', closeNav);

    
 })();