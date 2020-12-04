

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
        let titles = ["a Programmer\n", "a Penultimate Computer Science Student at NUS"];
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


function viewProjectTab(tabName, tabHead) {  

    $('.project-tab').removeClass('active-project');
    $('#' + tabHead).toggleClass('active-project');
  
    $('.project-content').css({ display: "none" });
    $('.' + tabName).css({ display: "grid" });
  
  };
  