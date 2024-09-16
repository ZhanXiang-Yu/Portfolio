/*
experimenting on JavaScript to make a sliding animation for diff. segments of the portfolio to make overall design more compact and pretty
*/


$(document).ready(function() {
    $('nav a').click(function(e) {
        e.preventDefault(); // Stop the page from jumping to the section

        var targetId = $(this).attr('href'); // Get the href attribute of the clicked link
        var $targetSection = $(targetId); // Select the corresponding section

        // Hide other sections and show the selected one with a slide effect
        $('section').not($targetSection).slideUp(500); // Hide all sections except the target
        $targetSection.delay(500).slideDown(500); // Delay to prevent overlaps, then show target
    });
    // When the title or project container is clicked, toggle its content
    $('.w-layout-vflex.projects').click(function() {
        // Slide toggle for the clicked project (hide or show its content)
        $(this).find('p, .heading2ndTitles, .w-embed-youtubevideo').slideToggle(500);
        
        // Optionally, you can hide other projects when one is opened
        // Uncomment the following line to hide other projects
        // $('.w-layout-vflex.projects').not(this).find('p, .heading2ndTitles, .w-embed-youtubevideo').slideUp(500);
    });
});

//future: add clicking effects on options and home logo
//add background effects
//add assent elements(more)
//make better ICON, maybe 3D