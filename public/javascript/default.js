 $(document).ready(function() {
 	var storyPadding = 60;
 	var newheight = $(window).outerHeight() - $(".topbar p").outerHeight(true) - $(".textContent").outerHeight(true) - storyPadding;
    $(".storyContent").height(newheight);
    console.log($(window).outerHeight());
});	