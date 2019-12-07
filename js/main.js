(() => {

    console.log('fired');

    const menu = document.querySelector('.menuCon'),
          navLightbox = document.querySelector('.navLightbox');

          
    

    function openNav(){
        let navLink = document.querySelectorAll('.navLink'),
            closeNav = document.querySelector('.navClose');
        
        navLightbox.classList.add('navLightboxOn'); 

        var tl = new TimelineMax();

        // tl.to(navLightbox, 0.5, { opacity: 0})
         tl.from(navLightbox, 0.6, { opacity: 0}, { opacity: 1,  ease: Power0.easeNone})
          .staggerFrom(navLink, 1.5, {opacity:0, ease: Power1.easeIn}, 0.2)
          .from(closeNav, 0.2, {opacity: 0, ease: Power1.easeIn });

        
    }


    // nav Lighgbox
    menu.addEventListener('click', openNav);
    navLightbox.querySelector('.navClose').addEventListener('click', function(){
        navLightbox.classList.remove('navLightboxOn');
    })
    
 })();