 $(document).ready(function() {
 	var newheight = $(window).outerHeight() - $(".topbar p").outerHeight(true) - $(".textContent").outerHeight(true) - $(".storyContent").outerHeight(true);
    $(".storyContent").height(newheight);
    console.log($(window).outerHeight());
});	