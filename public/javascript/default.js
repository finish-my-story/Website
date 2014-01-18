 $(document).ready(function() {
 	var storyPadding = 60;
 	var newheight = $(window).outerHeight() - $(".topbar p").outerHeight(true) - $(".textContent").outerHeight(true) - storyPadding;
 	var progressMargin = $(".leftBlock").outerWidth();
    $(".boxContent").height(newheight);
    $(".progressbar").css("margin-left", progressMargin);
    $(".progressbar").width($("#userContent").width);
    console.log($(window).outerWidth());
    console.log($(".leftBlock").outerWidth(true));
    console.log(parseInt($("body").css('margin-left').replace("px", "")));
});

var timer = 0;
var perc = 0;

function updateProgress(percentage) {
    $('#pbar_innerdiv').css("width", percentage + "%");
    $('#pbar_innertext').text(percentage + "%");
}

function animateUpdate() {
    perc++;
    updateProgress(perc);
    if(perc < 100) {
        timer = setTimeout(animateUpdate, 50);
    }
}

$(document).ready(function() {
    $('#pbar_outerdiv').mouseenter(function() {
        clearTimeout(timer);
        perc = 0;
        animateUpdate();
	});
});