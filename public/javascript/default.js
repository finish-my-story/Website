var timer = 0;
var perc = 0;

 $(document).ready(function() {
 	var storyPadding = 60;
 	var newheight = $(window).outerHeight() - $(".topbar p").outerHeight(true) - $(".textContent").outerHeight(true) - storyPadding;
 	var progressMargin = $(".leftBlock").outerWidth();
    $(".boxContent").height(newheight);
    $(".prog_outerdiv").css("margin-left", progressMargin);
    $(".prog_outerdiv").width($("#userContent").width);
    console.log($(window).outerWidth());
    console.log($(".leftBlock").outerWidth(true));
    console.log(parseInt($("body").css('margin-left').replace("px", "")));
    $('#prog_outerdiv').mouseenter(function() {
        clearTimeout(timer);
        perc = 0;
        animateUpdate();
	});
});

function updateProgress(percentage) {
    $('.prog_innerdiv').css("width", percentage + "%");
    // $('#pbar_innertext').text(percentage + "%");
}

function animateUpdate() {
    ++perc;
    updateProgress(perc);
    if(perc < 100) {
        timer = setTimeout(animateUpdate, 50);
    }
}