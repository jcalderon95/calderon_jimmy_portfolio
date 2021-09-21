(() => {

    //console.log('fired');

    const menu            =  document.querySelector('.menuCon'),
          navLightbox     =  document.querySelector('.navLightbox'),
          navLink         =  document.querySelectorAll('.navLink'),
          projectsCon     =  document.querySelector('.projects'),
          portfolioPiece  =  document.querySelector('.portfolioPiece'),
          homeAnim1       =  document.querySelector('.homeAnim1'),
          homeAnim2       =  document.querySelector('.homeAnim2'),
          name            =  document.querySelector('.block'),
          subtitleAnim1   =  document.querySelector('.subtitleAnim1'),
          subtitleAnim2   =  document.querySelector('.subtitleAnim2'),
          homeUnderline   =  document.querySelector('.homeUnderline');

    // Landing Page Animation
    const tlHome = new TimelineMax();

    tlHome.from(homeAnim1, .8, { opacity: 0 , ease: Power1.easeIn })
          .from(homeAnim2, .7, {opacity: 0, ease: Power1.easeIn })
          .from(name, .7, {opacity: 0, ease: Power1.easeIn })  
          .from(subtitleAnim1, .8, {opacity: 0, ease: Power1.easeIn })
          .from(subtitleAnim2, .8, {opacity: 0, ease: Power1.easeIn })
          .from(homeUnderline, .4, {opacity: 0, x: -20, ease: Power1.easeIn }); 
        
    // Get portafolio Data
    function getPortfolio(){
        let url = 'includes/portfolio/read.php';

        fetch(url)
            .then(res => res.json())
            .then(data => {
              //console.log(data);

              data.forEach(function(currentData){
                 //console.log(currentData);

                 projectsCon.innerHTML += `
                 <div class="portfolioProject">
                    <img data-target="${currentData.ID}" src="images/${currentData.Thumbnail}" alt="${currentData.Name} Image" class="thumbnail">
                </div>
                 `;

                 const thumbnail = document.querySelectorAll('.thumbnail');

                 thumbnail.forEach(thumbnail => thumbnail.addEventListener('click', getProject));                    
              });

            })
            .catch((err) => console.log(err));
    }

    // getPortfolio();


    // Get Portfolio Projects on Lightbox
    function getProject(){

        let url         = `includes/portfolio/read.php?id=${this.dataset.target}`,
            projectsLb  = document.querySelector('.projectsLb');

            projectsLb.classList.add('projectsLbOn');
            projectsLb.querySelector('.projectsClose').addEventListener('click', function(){
                projectsLb.classList.remove('projectsLbOn');
                portfolioPiece.innerHTML = "";
            });

        fetch(url)
        .then(res => res.json())
        .then(data => {   
            //console.log(data[0]);

            portfolioPiece.innerHTML = `
                <h2 class="projectName projectAnim">${data[0].Name}</h2>
                <h3 class="projectType projectAnim">${data[0].ProjectType}</h3>
                <div class="projectContent">
                     <img src="images/${data[0].Image}" alt="${data[0].Name} Image" class="imageLarge projectAnim">
                        <div class="textCon">
                            <p class="projectText projectAnim">${data[0].Description}</p>
                            <h4 class="role projectAnim">Role: ${data[0].Role}</h4>
                        </div>
                </div>
            `;

            let projectItem = document.querySelectorAll('.projectAnim');
            let tlProject = new TimelineMax();

            //console.log(projectItem);

            tlProject.staggerFrom(projectItem, 1.2, {opacity:0, ease: Power1.easeIn}, 0.3)

        })
        .catch((err) => console.log(err));
    }
    
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

    // close Navigation
    function scrollTo(e){
        navLightbox.classList.remove('navLightboxOn');
        e.preventDefault();
        let targetArea = e.currentTarget.id.slice(0,-3);
        target = '#' + targetArea;

	    TweenLite.to(window, 1, {scrollTo:{y: target, offsetY:60, autoKill:false, ease: Power1.easeIn}});
    }

    function closeNav(e){
        navLightbox.classList.remove('navLightboxOn');
    }
    
    
    menu.addEventListener('click', openNav);
    navLink.forEach(link => link.addEventListener('click', scrollTo));
    navLightbox.querySelector('.navClose').addEventListener('click', closeNav);

    
 })();