

$(document).ready(function(){

    setTimeout(() => {
        $('body').addClass("loaded")
    }, 2000)

    // Changing title effect
    const b = baffle(".changing-title");
    b.set({
        characters: '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
        speed: 120
    });

    var i = 1;
    let changeTitle = () => {
        let titles = ["a Programmer\n", "a Final Year CS Student at NUS", "a builder"];
        if (i == titles.length) {
        i = 0;
        }
        b.text(currentText => titles[i]).reveal(1500);
        i++;
    }

    setInterval(changeTitle, 3200);

    //Showing & Hiding Card Content on Click
    $('.project-card').click(function () {

        let thisCard = $(this), thisCardContent = $(this).children('.card-content');

        thisCardContent.toggleClass('view-card-details');

        $('.card-content').not(thisCardContent).removeClass('view-card-details');

    });

    $('.view-more').click(() => {
        let txt = $('#view-more-content').text();

        if (txt == "View More") {
            $('#view-more-content').text('View Less');
            $('.collapse-project').show().css({display:"grid", paddingRight:15});
        }
        else {
            $('#view-more-content').text('View More');
            $('.collapse-project').hide();
        }
    })

    $('.project-area .grid .test-popup-link').magnificPopup({
        type:'image',
        gallery:{enabled:true}
    })

})

function viewNav(navName){
    $('.nav-item').removeClass('active');
    $('#' + navName).toggleClass('active');
}

function viewEmp(empName){
    let currentlyActive = $('#' + empName + '-desc').hasClass('emp-desc-active');
    if (currentlyActive) {
        return 
    }
    
    $('.emp-item').removeClass('emp-active');
    $('.emp-desc').removeClass('emp-desc-active')
    setTimeout(function(){
        $('#' + empName + "-job").toggleClass('emp-active');
        $('#' + empName + "-desc").toggleClass('emp-desc-active')
    }, 250)
}

document.addEventListener("DOMContentLoaded", function(){

    let el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    let navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 