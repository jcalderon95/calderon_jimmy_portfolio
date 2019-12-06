(() => {

    console.log('fired');

    const menu = document.querySelector('.menuCon'),
          navLightbox = document.querySelector('.navLightbox');
    

    function openNav(){
        let navLink = document.querySelectorAll('.navLink');
        navLightbox.classList.add('navLightboxOn'); 


        let myTL = new TimelineLite();

        myTL.from(navLightbox, 0.4 ,{ opacity: 0})
            //.from(navLink, 0.1, { opacity: 0})
    }


    // nav Lighgbox
    menu.addEventListener('click', openNav);
    navLightbox.querySelector('.navClose').addEventListener('click', function(){
        navLightbox.classList.remove('navLightboxOn');
    })
    
 })();