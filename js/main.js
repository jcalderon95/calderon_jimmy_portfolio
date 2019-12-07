(() => {

    console.log('fired');

    const menu         = document.querySelector('.menuCon'),
          navLightbox  = document.querySelector('.navLightbox'),
          projectsCon     = document.querySelector('.projects');

    function getPortfolio(){
        let url = 'includes/portfolio/read.php';

        fetch(url)
            .then(res => res.json())
            .then(data => {
              //console.log(data);

              data.forEach(function(currentData){
                 console.log(currentData);

                 projectsCon.innerHTML += `
                 <div class="portfolioProject">
                    <img data-target="${currentData.ID}" src="images/${currentData.Thumbnail}" alt="${currentData.Name} Image" class="thumbnail">
                </div>
                 `;
                    
              });

            })
            .catch((err) => console.log(err));
    }
    
    getPortfolio();

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


    
    menu.addEventListener('click', openNav);

    navLightbox.querySelector('.navClose').addEventListener('click', function(){
        navLightbox.classList.remove('navLightboxOn');
    })
    
 })();